import * as React from 'react'
import { connect } from 'react-redux'
import EditField from '../EditField'
import { addedProjectTask } from '../../AC'
import StoreState from '../../types'


interface Props {
	addedProjectTask: Function;
	currentProject: any
}
interface State {
	isOpenTitle: boolean
}

class TitleTaskList extends React.Component<Props, State> {

	state = {
		isOpenTitle: false
	}


	render() {

		const { currentProject } = this.props


		return <section className='tasks__title'>
			{currentProject && <div className='title-block'>
				<h2 className='title-block__title tasks__head-text'>{currentProject.name}
				</h2>
			</div>}
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
	(state: StoreState) => ({
		currentProject: state.projects.find(item => item.isOpen)
	}),
	{ addedProjectTask }
)(TitleTaskList)

