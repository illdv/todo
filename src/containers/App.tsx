import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'

import StoreState, { Iproject, Itask } from '../types'
import { fetchTitlelist } from '../AC'
import ProjectTitle from './ProjectTitle'
import ProjectList from '../components/ProjectList'
import TaskItem from '../components/TaskList'
import TaskTitle from './TaskTitle'

import '../styles/style.css'
import { Route, Switch, Redirect } from 'react-router';


interface Props {
	fetchTitlelist: Function;
	projectList: Array<any>;
	currentTask: Itask;
	currentProject: Iproject;
}

class App extends React.Component<Props> {


	componentDidMount() {
		this.props.fetchTitlelist()
	}


	state = {
		isOpenMobileProjects: false
	}


	render() {

		const { projectList, currentTask, currentProject } = this.props

		console.log(projectList);


		const stylesAside = classnames({
			'projects--active': this.state.isOpenMobileProjects,
			'projects': true,
			'col-md-4': true,
		})

		const burgerBtn = <button title={this.discMobileBtn()} aria-label={this.discMobileBtn()}
			onClick={this.onToggleMobileProjects}
			className='toggle-burger'>
		</button>

		return <div className='container'>
			<div className='row'>
				<Route path='/' render={() =>
					<React.Fragment>
						<aside className={stylesAside}>
							<ProjectTitle />
							<ProjectList projectList={projectList} />
						</aside>
						{burgerBtn}

					</React.Fragment>

				}>

				</Route>



				<Switch>
					{projectList.length && <Route path='/:projectName' render={() => {



						return <article className='col-md-7 pl-md-5  tasks'>
							<TaskTitle currentProject={currentProject} />
							<TaskItem currentTask={currentTask} />
						</article>
					}


					}>
					</Route>}
					<Redirect to='/1' />
				</Switch>


			</div>
		</div >
	}
	discMobileBtn = () => this.state.isOpenMobileProjects ? 'Закрыть проекты' : 'Открыть проекты'
	onToggleMobileProjects = () => this.setState({
		isOpenMobileProjects: !this.state.isOpenMobileProjects
	})
}



export default

	connect(
		(state: StoreState) => {
			const openedProject = state.projects.find(item => item.isOpen)
			return {
				projectList: state.projects,
				currentTask: state.tasks.find((task) => openedProject.id === task.id),
				currentProject: state.projects.find((project) => openedProject.id === project.id)
			}
		},
		{ fetchTitlelist, }

	)(App)