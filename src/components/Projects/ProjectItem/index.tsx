import * as React from 'react';
import EditField from '../../EditField'
import DefaultField from './DefaultField'
import { connect } from 'react-redux'
import { editProjectName, changeCurrentId } from '../../../AC'
import StoreState, { Iproject } from '../../../types'


type Props = {
	projectList: Array<Object>;
	actualId: { editProject: number }
	changeCurrentId: Function;
	editProjectName: Function;

}

class ItemProjects extends React.Component<Props> {

	render() {
		const { projectList, actualId } = this.props

		return projectList.map((project: Iproject) =>

			actualId.editProject === project.id ?
				<EditField key={project.id}
					id={project.id} name={project.name}
					handleTextValue={this.editProjectName} onOpen={this.canceledEdit} /> :
				<DefaultField key={project.id} project={project}
				/>
		)
	}

	editProjectName = (value: string, id: number) => {
		return value.length ?
			this.props.editProjectName(value, id) : this.props.editProjectName(value, id),
			this.props.changeCurrentId()
	}

	canceledEdit = () => {
		this.props.changeCurrentId()
	}
}

export default connect(
	(state: StoreState) => (
		{
			actualId: state.currentId,
			projectList: state.projects
		}),
	{ editProjectName, changeCurrentId }
)(ItemProjects)


