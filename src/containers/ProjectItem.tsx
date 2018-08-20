import * as React from 'react';
import EditField from '../components/EditField'
import ProjectField from '../components/ProjectField'
import { connect } from 'react-redux'
import { editProjectName, changeCurrentId, toggleText } from '../AC'
import StoreState, { Iproject } from '../types'


type Props = {
	projectList: Array<Object>;
	actualId: any;
	changeCurrentId: Function;
	editProjectName: Function;
	toggleText: Function;

}

class ItemProjects extends React.Component<Props> {

	render() {
		const { projectList, actualId, toggleText } = this.props

		return projectList.map((project: Iproject) =>

			actualId.editProject === project.id ?
				<EditField key={project.id}
					id={project.id} name={project.name}
					handleTextValue={this.editProjectName} onOpen={this.canceledEdit} /> :
				<ProjectField key={project.id} project={project}
					actualId={actualId} toggleText={toggleText}
					changeCurrentId={changeCurrentId}
				/>
		)
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
	(state: StoreState) => (
		{
			actualId: state.currentId,
			projectList: state.projects
		}),
	{ editProjectName, changeCurrentId, toggleText }
)(ItemProjects)


