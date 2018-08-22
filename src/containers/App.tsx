import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'

import StoreState, { Itask } from '../types'
import { fetchTitlelist } from '../AC'
import ProjectTitle from './ProjectTitle'
import ProjectList from '../components/ProjectList'
import TaskItem from '../components/TaskList'
import TitleTaskList from './TaskTitle'

import '../styles/style.css'


interface Props {
	fetchTitlelist: Function;
	projectList: Array<Object>;
	currentTask: Itask;
}

class App extends React.Component<Props> {


	componentDidMount() {
		this.props.fetchTitlelist()
	}


	state = {
		isOpenMobileProjects: false
	}


	render() {
		const { projectList, currentTask } = this.props

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
				<React.Fragment>
					<aside className={stylesAside}>
						<ProjectTitle />
						<ProjectList projectList={projectList} />
					</aside>
					{burgerBtn}
				</React.Fragment>

				<article className='col-md-7 pl-md-5  tasks'>
					<TitleTaskList />
					{currentTask && <TaskItem currentTask={currentTask} />}
				</article>


			</div>
		</div >
	}
	discMobileBtn = () => this.state.isOpenMobileProjects ? 'Закрыть проекты' : 'Открыть проекты'
	onToggleMobileProjects = () => this.setState({
		isOpenMobileProjects: !this.state.isOpenMobileProjects
	})
}



export default connect(
	(state: StoreState) => {
		const openedProject = state.projects.find(item => item.isOpen)

		return {
			projectList: state.projects,
			currentTask: state.tasks.find((task) => openedProject.id === task.id)
		}
	},
	{ fetchTitlelist, }
)(App)

