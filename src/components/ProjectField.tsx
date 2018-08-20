import * as React from 'react';
import classnames from 'classnames'
import ProjectModal from '../containers/ProjectModal'
import { Iproject } from '../types'
import CurrentIdBtn from '../containers/buttons/CurrentIdBtn'

interface Props {
	project: Iproject;
	toggleText: Function;
	changeCurrentId: Function;
	actualId: { modal: number };
}

class ProjectField extends React.Component<Props> {


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
				<ProjectModal id={project.id} />}
		</li>
	}
}


export default ProjectField


