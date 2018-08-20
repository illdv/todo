import * as React from 'react'
import EditField from '../EditField'
import { connect } from 'react-redux';
import { addTab } from '../../AC'

interface Props {
    addTab: Function;
}
interface State {
    isOpenTitle: boolean
}

class TitleMenu extends React.Component<Props, State> {

    state = {
        isOpenTitle: false,
    }

    render() {

        return <section className='projects__title'>
            <div className='projects__wrapper title-block'>
                <h2 className='title-block__title'>Проекты	</h2>
                <button onClick={this.HandleOpen}
                    aria-label='добавить проект' title='добавить проект' className='projects__add-btn title-block__btn-add'
                >
                </button>
            </div>
            {this.state.isOpenTitle && <EditField
                onOpen={this.HandleOpen} handleTextValue={this.handleProjectTitle} />}
        </section>
    }

    HandleOpen = () => {
        this.setState({
            isOpenTitle: !this.state.isOpenTitle
        })
    }

    handleProjectTitle = (value: string) => {
        value && this.props.addTab(value)
        this.HandleOpen()
    }

}


export default connect(
    null,
    { addTab }
)(TitleMenu)