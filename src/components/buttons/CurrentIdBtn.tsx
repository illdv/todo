import * as React from 'react'
import { connect } from 'react-redux'
import { changeCurrentId } from '../../AC'


interface ICurrentIdBtn {
	changeCurrentId: Function;
	id: number
	textContent: string;
	mark: string;
	classValue: string
}

const CurrentIdBtn = ({ changeCurrentId, id, textContent, mark, classValue }: ICurrentIdBtn) =>
	<span
		className={classValue}
		onClick={() => changeCurrentId(id, mark)}>
		{textContent}
	</span>


export default connect(
	null,
	{ changeCurrentId }
)(CurrentIdBtn)