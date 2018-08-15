import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editProjectText, currentId } from './../../../AC'

// import EditFieldText from './EditFieldText'
import EditField from './../../EditField'
import DefaultField from './DefaultField'


class ItemTaskList extends Component {


	render() {
		const { task, ProjectId, actualId } = this.props

		return actualId.editTask === task.id ?
			<EditField name={task.text} handleTextValue={this.handleTextValue}
				onOpen={this.cancelEdit} /> :
			<DefaultField idProject={ProjectId} item={task} />
	}

	handleTextValue = value => {
		value.length ?
			this.props.editProjectText(value, this.props.task.id, this.props.ProjectId) :
			this.props.editProjectText(this.props.task.text, this.props.task.id, this.props.ProjectId)
		this.props.currentId()
	}

	cancelEdit = () => {
		this.props.currentId()
	}

}



export default connect(
	state => (
		{
			actualId: state.currentId
		}),
	{ editProjectText, currentId }
)(ItemTaskList)