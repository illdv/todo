import * as React from 'react';


import TitleTaskList from './TitleTaskList'
import ItemTaskList from './ItemTaskList'



interface Props {
	tasks: Array<Object>

}

class TaskList extends React.Component<Props> {

	render() {

		return <React.Fragment>
			{this.props.tasks && this.props.tasks.map((task: { id: number, isOpen: boolean, text: Array<Object> }) =>
				task.isOpen && <React.Fragment key={task.id}>
					<TitleTaskList id={task.id} />
					<ul className='list-block'>
						{task.text.map((text: { id: number }) =>
							<ItemTaskList
								task={text}
								ProjectId={task.id}
								key={text.id}
							/>
						)}
					</ul>
				</React.Fragment>
			)}
		</React.Fragment>
	}
}


export default TaskList