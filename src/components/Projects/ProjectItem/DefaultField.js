import React, { Component } from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import { toggleText, currentId } from './../../../AC'
import ModalProject from './ModalProject'

class DefaultField extends Component {

	state = {
		isOpened: null
	}


	handleClickOutside = e => {
		e.target.classList.value !== 'modal-list__btn' && this.props.currentId()
	};

	render() {
		const { project, tasks, toggleText, actualId, currentId } = this.props




		const onActive = Object.keys(tasks).length && this.props.tasks.find(task =>
			task.id === project.id
		).isOpen

		const activeStyle = classnames({
			'projects__item': true,
			'list-block__item': true,
			'active-item': onActive,
			'active-item--project': onActive,
		})

		return <li className={activeStyle} >
			<span onClick={() => toggleText(project.id)}
				className='list-block__text projects__text' >
				{project.name}
			</span>
			{onActive && <button className='list-block__btn' onClick={() => currentId(project.id, 'modal')}>Изменить</button>}

			{actualId.modal === project.id &&
				<ModalProject id={project.id} />}
		</li>
	}
}


export default connect(
	state => (
		{
			actualId: state.currentId,
			tasks: state.tasks
		}),
	{ toggleText, currentId }
)(DefaultField)
