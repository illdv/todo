import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import { toggleText } from '../../../AC'
import ModalProject from './ModalProject'
import StoreState, { Iproject } from '../../../types'
import CurrentIdBtn from '../../buttons/CurrentIdBtn'


interface Props {
	project: Iproject;
	toggleText: Function;
	actualId: { modal: number };
}


class DefaultField extends React.Component<Props> {



	render() {
		const { project, toggleText, actualId } = this.props




		const activeStyle = classnames({
			'projects__item': true,
			'list-block__item': true,
			'active-item': project.isOpen,
			'active-item--project': project.isOpen,
		})

		return <li className={activeStyle} >
			<span onClick={() => toggleText(project.id)}
				className='list-block__text projects__text' >
				{project.name}
			</span>

			{project.isOpen &&
				<CurrentIdBtn id={project.id} textContent='Изменить' mark='modal' classValue='list-block__btn' />}
			{actualId.modal === project.id &&
				<ModalProject id={project.id} />}
		</li>
	}
}


export default connect(
	(state: StoreState) => (
		{
			actualId: state.currentId,
		}),
	{ toggleText }
)(DefaultField)
