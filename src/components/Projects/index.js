import React, { Component } from 'react'
import ProjectTitle from './ProjectTitle'
import ProjectItem from './ProjectItem/'


class ProjectList extends Component {



	render() {


		return <React.Fragment>
			<ProjectTitle />
			<ul className='project__list list-block'>
				{Object.keys(this.props.listProjects).length && this.props.listProjects.map(project =>
					<ProjectItem key={project.id} project={project}
					/>
				)}
			</ul>
		</React.Fragment>
	}
}


export default ProjectList
