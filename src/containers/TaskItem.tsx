import * as React from 'react';
import { connect } from 'react-redux'
import { editProjectText, changeCurrentId } from '../AC'


import EditField from '../components/EditField'
import DefaultField from '../components/TaskField'

import StoreState, { Itask } from '../types'
import { createSelector } from 'reselect'


interface Props {
	editProjectText: Function;
	changeCurrentId: Function;
	actualId: any;
	currentTask: Itask,
	projectId: any,
}

class ItemTaskList extends React.Component<Props> {



	render() {
		const { actualId, currentTask, projectId } = this.props
		console.log(projectId);


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

const fn = createSelector(
	(state: StoreState) => state.projects.find(item => item.isOpen),
	(state: StoreState) => state.tasks,
	(projectOpen, tasks) => {
		return tasks.find((task) => projectOpen.id === task.id)
	}
)


export default connect(
	(state: StoreState) => {


		return {
			actualId: state.currentId,
			currentTask: fn(state),
			projectId: state.projects.find(item => {

				return item.isOpen
			})
		}
	}, { editProjectText, changeCurrentId }
)(ItemTaskList)