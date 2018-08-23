import * as React from 'react';
import ProjectModal from './ProjectModal'
import classnames from 'classnames'
import { Iproject } from '../types'
import CurrentIdBtn from './buttons/CurrentIdBtn'
import EditField from '../components/EditField'
import { connect } from 'react-redux'
import { editProjectName, changeCurrentId, toggleText } from '../AC'
import { Link } from 'react-router-dom';


interface Props {
	project: Iproject;
	changeCurrentId: Function;
	editProjectName: Function;
	actualId: any
	toggleText: Function;
}

class ProjectField extends React.Component<Props> {

	render() {


		const { project, actualId, toggleText } = this.props

		const activeStyle = classnames({
			'list-block__text': true,
			'projects__text': true,
			'active-item': project.isOpen,
			'active-item--project': project.isOpen,
		})


		const defaultField = <React.Fragment>
			<Link to={`/${project.id}`} onClick={() => toggleText(project.id)}
				className={activeStyle}>

				{project.name}
			</Link>

			<CurrentIdBtn id={project.id} textContent='Изменить' mark='modal' classValue='list-block__btn projects__btn' />
			{
				actualId.modal === project.id &&
				<ProjectModal id={project.id} />
			}
		</React.Fragment >



		return <li className='projects__item list-block__item' >
			{actualId.editProject === project.id ? <EditField key={project.id}
				id={project.id} name={project.name}
				handleTextValue={this.editProjectName} onOpen={this.canceledEdit} /> : defaultField}
		</li>
	}

	editProjectName = (value: string, id: number, name: string) => {
		return value.length ?
			this.props.editProjectName(value, id) :
			this.props.editProjectName(name, id),
			this.props.changeCurrentId()
	}

	canceledEdit = () => {
		this.props.changeCurrentId()
	}
}





export default connect(
	(state: any) => (
		{
			actualId: state.currentId
		}),
	{ editProjectName, changeCurrentId, toggleText }
)(ProjectField)