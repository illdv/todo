import * as React from 'react'
import { connect } from 'react-redux'
import { deleteTab, deleteTask } from '../../AC'

interface IdeleteFn {
	deleteTab: Function;
	deleteTask: Function;
	id: number;
	textContent: string;
	classValue: string;
	projectId?: number;
}

const DeleteBtn = ({ deleteTab, deleteTask, id, textContent, classValue, projectId }: IdeleteFn) => {
	const choiceBtn = () => projectId ? deleteTask(id, projectId) : deleteTab(id)

	return <span className={classValue}
		onClick={choiceBtn}>
		{textContent}
	</span>
}





export default connect(
	null,
	{ deleteTab, deleteTask }
)(DeleteBtn)