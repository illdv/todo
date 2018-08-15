import * as React from 'react';
import Projects from './Projects'
import Tasks from './Tasks'
import { connect } from 'react-redux'
import { fetchTitlelist, } from '../AC'
import StoreState from '../types'

import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


export interface Props {
	fetchTitlelist: Function;
	listProjects: Array<Object>;
	listTasks: Array<Object>;
}

class App extends React.Component<Props, object> {


	componentDidMount() {
		this.props.fetchTitlelist()
	}

	state = {
		isOpenProjects: false
	}

	render() {

		return <div className='container'>
			<div className='row'>
				<aside className={classnames({
					'col-md-4': true,
					'projects': true,
					'projects--active': this.state.isOpenProjects
				})}>
					<Projects listProjects={this.props.listProjects} />
				</aside>

				<section className='col-md-7 pl-md-5  tasks'>
					<Tasks listTasks={this.props.listTasks} />
				</section>

				<button
					onClick={() => this.setState({
						isOpenProjects: !this.state.isOpenProjects
					})}
					className='toggle-burger'>toggle-burger
					</button>
			</div>
		</div >
	}
}

function mapStateToProps({ projects, tasks }: StoreState) {
	return {
		listProjects: projects,
		listTasks: tasks,
	}
}


export default connect(
	mapStateToProps,
	{ fetchTitlelist, }
)(App)
