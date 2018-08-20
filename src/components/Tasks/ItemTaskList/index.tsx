import * as React from 'react';
import { connect } from 'react-redux'
import { editProjectText, changeCurrentId } from '../../../AC'


import EditField from '../../EditField'
import DefaultField from './DefaultField'

import StoreState, { Itask } from '../../../types'


interface Props {
	editProjectText: Function;
	changeCurrentId: Function;
	actualId: any;
	currentTask: Itask

}

class ItemTaskList extends React.Component<Props> {


	render() {
		const { actualId, currentTask } = this.props


		return currentTask ? <ul className='list-block'>
			{currentTask.text.map(taskText => {
				return actualId.editTask === taskText.id ?
					<EditField key={taskText.id} name={taskText.text} id={taskText.id} handleTextValue={this.handleTextValue}
						onOpen={this.cancelEdit} /> :
					<DefaultField key={taskText.id} projectId={currentTask.id} taskText={taskText} />
			})}

		</ul> : null
	}

	handleTextValue = (value: string, id: number, text: string) => {
		value.length ?
			this.props.editProjectText(value, id, this.props.currentTask.id) :
			this.props.editProjectText(text, id, this.props.currentTask.id)
		this.props.changeCurrentId()
	}

	cancelEdit = () => {
		this.props.changeCurrentId()
	}

}



export default connect(
	(state: StoreState) => {
		const openProject = state.projects.find(item => item.isOpen)

		return {
			actualId: state.currentId,
			currentTask: state.tasks.find(task => openProject.id === task.id)
		}
	}, { editProjectText, changeCurrentId }
)(ItemTaskList)