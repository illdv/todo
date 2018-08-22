import * as React from 'react'
import { connect } from 'react-redux'
import { editProjectText, changeCurrentId } from '../AC'
import DeleteBtn from './buttons/DeleteBtn'
import CurrentIdBtn from './buttons/CurrentIdBtn'
import EditField from '../components/EditField'
import StoreState, { Itext } from '../types'



interface Props {
	projectId: number;
	taskText: Itext;
	actualId: { editTask: number };
	editProjectText: Function;
	changeCurrentId: Function;
}

class TaskField extends React.Component<Props>  {


	render() {

		const { projectId, taskText, actualId } = this.props

		const defaultField = <React.Fragment>
			<DeleteBtn id={taskText.id} textContent='удалить задачу' projectId={projectId} classValue='list-block__btn' />
			<CurrentIdBtn id={taskText.id} mark='editTask'
				textContent={taskText.text} classValue='tasks__text list-block__text' />
		</React.Fragment>




		return actualId.editTask === taskText.id ? <EditField key={taskText.id} name={taskText.text} id={taskText.id} handleTextValue={this.handleTextValue}
			onOpen={this.cancelEdit} /> : defaultField
	}

	handleTextValue = (value: string, id: number, text: string) => {
		value.length ?
			this.props.editProjectText(value, id, this.props.projectId) :
			this.props.editProjectText(text, id, this.props.projectId)
		this.props.changeCurrentId()
	}

	cancelEdit = () => {
		this.props.changeCurrentId()
	}

}


export default connect(
	(state: StoreState) => {
		return {
			actualId: state.currentId,
		}
	}, { editProjectText, changeCurrentId }
)(TaskField)