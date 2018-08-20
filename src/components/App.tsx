import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css'

import { fetchTitlelist } from '../AC'
import ProjectTitle from './Projects/ProjectTitle'
import ProjectItem from './Projects/ProjectItem'
import ItemTaskList from './Tasks/ItemTaskList'
import TitleTaskList from './Tasks/TitleTaskList'


import './style.css'




interface Props {
	fetchTitlelist: Function;
}

class App extends React.Component<Props> {


	componentDidMount() {
		this.props.fetchTitlelist()
	}


	state = {
		isOpenMobileProjects: false
	}

	render() {

		return <div className='container'>
			<div className='row'>
				<aside className={classnames({
					'col-md-4': true,
					'projects': true,
					'projects--active': this.state.isOpenMobileProjects
				})}>
					<ProjectTitle />
					<ProjectItem />
				</aside>

				<section className='col-md-7 pl-md-5  tasks'>
					<TitleTaskList />
					<ItemTaskList />
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
	null,
	{ fetchTitlelist, }
)(App)

