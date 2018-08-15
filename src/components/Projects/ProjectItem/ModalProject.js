import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTab, currentId } from './../../../AC'
import onClickOutside from "react-onclickoutside";


class ModalProject extends Component {

	render() {
		return <ul className='list-block modal-list'>
			{this.listBtn().map((btn, index) =>
				<li className='modal-list__item' key={index}>
					{btn}
				</li>
			)}
		</ul>
	}

	handleClickOutside = e => {
		e.target.classList.value !== 'modal-list__btn' && this.props.currentId()
	};

	listBtn = () => {
		const { id, deleteTab } = this.props
		return [
			<button className='modal-list__btn' onClick={() => deleteTab(id)}>удалить проект</button>,
			<button className='modal-list__btn' onClick={() => this.props.currentId(id, 'editProject')}>редактировать название</button>
		]
	}
}


export default connect(
	state => (
		{
			actualId: state.currentId,
		}),
	{ deleteTab, currentId }
)(onClickOutside(ModalProject))