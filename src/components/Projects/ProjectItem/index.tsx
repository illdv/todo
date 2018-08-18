import * as React from 'react';
import EditField from '../../EditField'
import DefaultField from './DefaultField'
import { connect } from 'react-redux'
import { editProjectName, currentId } from '../../../AC'
import StoreState from '../../../types'


type Props = {
	projectList: Array<any>;
	actualId: any;
	currentId: Function;
	editProjectName: Function;

}

class ItemProjects extends React.Component<Props> {

	render() {
		const { projectList, actualId } = this.props

		return projectList.map((project: { id: number, name: string }) =>

			actualId.editProject === project.id ?
				<EditField key={project.id} id={project.id} name={project.name} handleTextValue={this.editProjectName} onOpen={this.canceledEdit} /> :
				<DefaultField key={project.id} project={project}
				/>
		)
	}

	editProjectName = (value: string, id: number) => {
		return value.length ?
			this.props.editProjectName(value, id) : this.props.editProjectName(value, id),
			this.props.currentId()
	}

	canceledEdit = () => {
		this.props.currentId()
	}
}

export default connect(
	(state: StoreState) => (
		{
			actualId: state.currentId,
			projectList: state.projects
		}),
	{ editProjectName, currentId }
)(ItemProjects)


