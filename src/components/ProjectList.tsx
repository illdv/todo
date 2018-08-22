import * as React from 'react';
import ProjectField from '../containers/ProjectField'
import { Iproject } from '../types'

type Props = {
	projectList: Array<Object>;
}

class ItemProjects extends React.Component<Props> {

	render() {


		const { projectList } = this.props
		return projectList.map((project: Iproject) =>

			<ProjectField key={project.id} project={project} />


		)
	}


}


export default ItemProjects


