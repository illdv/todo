import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditField from '../EditField'
import { addedProjectTask } from './../../AC'

class TitleTaskList extends Component {

	state = {
		isOpenTitle: false
	}


	render() {


		const btn = <button onClick={this.HandleOpen}
			aria-label='добавить задачу' title='добавить задачу' className='title-block__btn-add tasks__add-btn'
		>
			добавить задачу
		</button>


		return <section className='tasks__title'>
			<div className='title-block'>

				<h2 className='title-block__title tasks__head-text'>{this.projectName()}
				</h2>

			</div>
			{this.state.isOpenTitle ?
				<EditField onOpen={this.HandleOpen} id={this.props.id} handleTextValue={this.handleProjectTitle} /> : btn}

		</section>
	}

	projectName = () => {
		const strName = this.props.projects.find(project =>
			project.id === this.props.id
		).name
		return strName[0].toUpperCase() + strName.slice(1)
	}

	HandleOpen = () => this.setState({
		isOpenTitle: !this.state.isOpenTitle
	})

	handleProjectTitle = value => {
		value && this.props.addedProjectTask(this.props.id, value)
		this.HandleOpen()
	}
}



export default connect(
	state => (
		{
			projects: state.projects
		}),
	{ addedProjectTask }
)(TitleTaskList)

