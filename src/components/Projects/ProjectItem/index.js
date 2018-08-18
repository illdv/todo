import React, { Component } from 'react';
import EditField from './../../EditField'
import DefaultField from './DefaultField'
import { connect } from 'react-redux'
import { editProjectName, currentId } from './../../../AC'


class ItemProjects extends Component {

	render() {
		const { projectList, actualId } = this.props

		return projectList.map(project =>

			actualId.editProject === project.id ?
				<EditField key={project.id} id={project.id} name={project.name} handleTextValue={this.editProjectName} onOpen={this.canceledEdit} /> :
				<DefaultField key={project.id} project={project}
				/>
		)


	}

	editProjectName = (value, id) => {
		value.length ?
			this.props.editProjectName(value, id) : this.props.editProjectName(this.props.project.name, id)
		this.props.currentId()
	}

	canceledEdit = () => {
		this.props.currentId()
	}
}

export default connect(
	state => (
		{
			actualId: state.currentId,
			projectList: state.projects
		}),
	{ editProjectName, currentId }
)(ItemProjects)


