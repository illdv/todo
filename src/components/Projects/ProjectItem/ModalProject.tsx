import * as React from 'react'

import onClickOutside from "react-onclickoutside";
import DeleteBtn from '../../buttons/DeleteBtn'
import CurrentIdBtn from '../../buttons/CurrentIdBtn'
import { changeCurrentId } from '../../../AC'
import { randomId } from '../../../helpers'
import { connect } from 'react-redux';

interface Props {
	id: number;
	changeCurrentId: Function;
}

@onClickOutside
class ModalProject extends React.Component<Props> {

	render() {
		return <ul className='list-block modal-list'>
			{this.listBtn().map(btn =>
				<li className='modal-list__item' key={randomId()}>
					{btn}
				</li>
			)}
		</ul>
	}

	handleClickOutside = (e: any) => {
		e.target.classList.value !== 'modal-list__btn' && this.props.changeCurrentId()
	};

	listBtn = () =>
		[
			<DeleteBtn id={this.props.id} textContent='удалить проект' classValue='modal-list__btn' />,
			<CurrentIdBtn id={this.props.id} mark='editProject'
				classValue='modal-list__btn' textContent='редактировать название' />
		]

}


export default connect(
	null,
	{ changeCurrentId }

)(ModalProject)