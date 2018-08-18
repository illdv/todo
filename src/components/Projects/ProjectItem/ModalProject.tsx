import * as React from 'react'
import { connect } from 'react-redux'
import { deleteTab, currentId } from '../../../AC'
import onClickOutside from "react-onclickoutside";
import DeleteBtn from '../../buttons/delete'

interface Props {
	id: number;
	deleteTab: Function;
	currentId: Function;
}

@onClickOutside
class ModalProject extends React.Component<Props> {

	render() {
		return <ul className='list-block modal-list'>
			{this.listBtn().map((btn, index) =>
				<li className='modal-list__item' key={index}>
					{btn}
					<DeleteBtn id={this.props.id} textContent='удалить проект' />
				</li>
			)}
		</ul>
	}

	handleClickOutside = (e: any) => {
		e.target.classList.value !== 'modal-list__btn' && this.props.currentId()
	};

	listBtn = () => {
		const { id, deleteTab, currentId } = this.props
		return [

			<button className='modal-list__btn' onClick={() => deleteTab(id)}>удалить проект</button>,
			<button className='modal-list__btn' onClick={() => currentId(id, 'editProject')}>редактировать название</button>
		]
	}
}


export default connect(
	null,
	{ deleteTab, currentId }
)(ModalProject)