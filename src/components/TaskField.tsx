import * as React from 'react'
import DeleteBtn from '../containers/buttons/DeleteBtn'
import CurrentIdBtn from '../containers/buttons/CurrentIdBtn'
import { Itext } from '../types'

interface Itypes {
	projectId: number;
	taskText: Itext;
}

const defaultField = ({ projectId, taskText }: Itypes) =>
	<li className='list-block__item tasks__item'>
		<DeleteBtn id={taskText.id} textContent='удалить задачу' projectId={projectId} classValue='list-block__btn' />
		<CurrentIdBtn id={taskText.id} mark='editTask'
			textContent={taskText.text} classValue='tasks__text list-block__text' />
	</li>



export default defaultField