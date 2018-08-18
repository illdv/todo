import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'

import StoreState from '../types'
import { fetchTitlelist } from '../AC'
import Projects from './Projects'
import Tasks from './Tasks'

import './style.css'




interface Props {
	fetchTitlelist: Function;
	listProjects: Array<Object>;
	listTasks: Array<Object>;

}

class App extends React.Component<Props> {


	componentDidMount() {
		this.props.fetchTitlelist()
	}


	state = {
		isOpenMobileProjects: false
	}

	render() {
		const { listProjects, listTasks } = this.props

		return <div className='container'>
			<div className='row'>
				<aside className={classnames({
					'col-md-4': true,
					'projects': true,
					'projects--active': this.state.isOpenMobileProjects
				})}>
					<Projects projects={listProjects} />
				</aside>

				<section className='col-md-7 pl-md-5  tasks'>
					<Tasks tasks={listTasks} />
				</section>

				<button
					onClick={this.onToggleMobileProjects}
					className='toggle-burger'>toggle-burger
					</button>
			</div>
		</div >
	}

	onToggleMobileProjects = () => this.setState({
		isOpenMobileProjects: !this.state.isOpenMobileProjects
	})
}

export default connect(
	(state: StoreState) => ({
		listProjects: state.projects,
		listTasks: state.tasks,
	}),
	{ fetchTitlelist, }
)(App)
