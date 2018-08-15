import React, { Component } from 'react';

import TitleTaskList from './TitleTaskList'
import ItemTaskList from './ItemTaskList/'

class TaskList extends Component {


	render() {

		return <React.Fragment>
			{Object.keys(this.props.listTasks).length && this.props.listTasks.map(task =>
				task.isOpen && <React.Fragment key={task.id}>
					<TitleTaskList id={task.id} />
					<ul className='list-block '>
						{task.text.map(item =>
							<ItemTaskList
								task={item}
								ProjectId={task.id}
								key={item.id}
							/>
						)}
					</ul>
				</React.Fragment>
			)}
		</React.Fragment>

	}

}


export default TaskList