import * as React from 'react'
import { connect } from 'react-redux'
import { deleteTab } from '../../AC'




const DeleteBtn = ({ deleteTab, id, textContent }: any) => <button className='modal-list__btn' onClick={() => deleteTab(id)}>{textContent}</button>





export default connect(
	null,
	{ deleteTab }
)(DeleteBtn)