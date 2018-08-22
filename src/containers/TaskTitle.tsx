import * as React from 'react'
import { connect } from 'react-redux'
import EditField from '../components/EditField'
import { addedProjectTask } from '../AC'


interface Props {
	addedProjectTask: Function;
	currentProject: { name: string, id: number }
}
interface State {
	isOpenTitle: boolean;
}

class TitleTaskList extends React.Component<Props, State> {

	state = {
		isOpenTitle: false
	}


	render() {

		const { currentProject } = this.props



		return <section className='tasks__title'>
			<div className='title-block'>
				<h2 className='title-block__title tasks__head-text'>{currentProject.name}
				</h2>
			</div>
			{this.state.isOpenTitle ?
				<EditField onOpen={this.HandleOpen} id={currentProject.id}
					handleTextValue={this.handleProjectTitle} /> :
				<button onClick={this.HandleOpen} className='title-block__btn-add tasks__add-btn'
					aria-label='добавить задачу' title='добавить задачу'
				>добавить задачу
			</button>}
		</section>
	}

	HandleOpen = () => this.setState({
		isOpenTitle: !this.state.isOpenTitle
	})

	handleProjectTitle = (value: string) => {
		value && this.props.addedProjectTask(this.props.currentProject.id, value)
		this.HandleOpen()
	}
}


export default connect(
	null,
	{ addedProjectTask }
)(TitleTaskList)

