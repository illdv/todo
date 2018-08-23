import * as React from 'react';



import TaskField from '../containers/TaskField'



interface Props {

	currentTask: any,
}

class ItemTaskList extends React.Component<Props> {


	render() {

		const { currentTask } = this.props

		return <ul className='list-block'>
			{currentTask.text.map((taskText: any) =>
				<li className='list-block__item tasks__item' key={taskText.id}>
					<TaskField projectId={currentTask.id} taskText={taskText} />
				</li>

			)}
		</ul>
	}

}

export default ItemTaskList