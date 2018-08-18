import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import { toggleText, currentId } from '../../../AC'
import ModalProject from './ModalProject'
import StoreState from '../../../types'


interface Props {
	project: any;
	toggleText: Function;
	currentId: Function;
	actualId: { modal: number };
}


class DefaultField extends React.Component<Props> {



	render() {
		const { project, toggleText, actualId, currentId } = this.props




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

			{project.isOpen && <button className='list-block__btn' onClick={() => currentId(project.id, 'modal')}>Изменить</button>}
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
	{ toggleText, currentId }
)(DefaultField)
