import * as React from 'react';
import ProjectTitle from './ProjectTitle'
import ProjectItem from './ProjectItem'



interface Props {
	projects: Array<Object>
}

class ProjectList extends React.Component<Props> {



	render() {
		const { projects } = this.props;

		return <React.Fragment>
			<ProjectTitle />
			<ul className='project__list list-block'>
				{projects.map((project: { id: number }) =>
					<ProjectItem key={project.id} project={project}
					/>
				)}
			</ul>
		</React.Fragment>
	}
}


export default ProjectList