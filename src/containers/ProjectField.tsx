import * as React from 'react';
import ProjectModal from './ProjectModal'
import { Iproject } from '../types'
import CurrentIdBtn from './buttons/CurrentIdBtn'
import EditField from '../components/EditField'
import { connect } from 'react-redux'
import { editProjectName, changeCurrentId, toggleText } from '../AC'
import { NavLink } from 'react-router-dom';


interface Props {
	project: Iproject;
	changeCurrentId: Function;
	editProjectName: Function;
	actualId: any
	toggleText: Function;
}

class ProjectField extends React.Component<Props> {

	fn = (match: any, location: any) => {

		return match
	}
	render() {


		const { project, actualId, toggleText } = this.props




		const defaultField = <React.Fragment>
			<NavLink to={`/${project.name}`} onClick={() => toggleText(project.id)}
				className='list-block__text projects__text' activeClassName="active-item--project active-item" isActive={this.fn}>

				{project.name}
			</NavLink>

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