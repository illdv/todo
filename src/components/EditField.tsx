import * as React from 'react'

interface Props {
	onOpen: any;
	handleTextValue: Function;
	id?: number;
	name?: string;
}
interface State {
	value: string
}

class ValueFieldTitle extends React.Component<Props, State> {

	state = {
		value: ''
	}

	textInput: any = React.createRef();

	componentDidMount() {
		this.textInput.current.focus();
	}

	render() {

		return <div className='edit-field title-project-list__field-edit'>
			<input className='edit-field__enter-value' type='text' onChange={this.handleValue}
				ref={this.textInput}
				defaultValue={this.props.name}
			/>
			<button className='edit-field__btn edit-field__btn--save'
				onClick={() => this.props.handleTextValue(this.state.value, this.props.id, this.props.name)}>
				сохранить
			</button>
			<button className='edit-field__btn edit-field__btn--cancel'
				onClick={this.props.onOpen}>отмена
			</button>
		</div >
	}

	handleValue = (e: any) => this.setState({
		value: e.target.value
	})
}

export default ValueFieldTitle