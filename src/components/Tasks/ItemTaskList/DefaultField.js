import React from 'react'
import { connect } from 'react-redux'
import { deletedTask, currentId } from './../../../AC'


const defaultField = ({ idProject, item, deletedTask, currentId }) =>
	<li

		className='list-block__item tasks__item'>
		<button className='list-block__btn'
			onClick={() => deletedTask(item.id, idProject)}>удалить</button>
		<span onClick={() => currentId(item.id, 'editTask')}
			className='tasks__text list-block__text'>{item.text}</span>
	</li>

export default connect(
	null,
	{ deletedTask, currentId }
)(defaultField)