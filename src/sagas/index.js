import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import {
	START, SUCCESS, FAIL, FETCH_TITLE_LIST, ADD_TITLE_ITEM, ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TITLE_ITEM, EDIT_TITLE_ITEM,
	CREATE_TASK_LIST, DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK, CURRENT_ID, DELETE_TAB, ADD_TAB
} from "../constants";
import getData from '../api'

const addId = (item, title) =>
	({ id: Date.now() + Math.random(), [title ? 'name' : 'text']: item })







function* fetchTitle() {
	yield takeLatest(FETCH_TITLE_LIST, function* (action) {
		yield put({
			type: `${action.type}__START`,
		})

		try {
			const responseArr = yield call(getData);
			const dataTitle = responseArr.map(item => addId(item.name, 'title'))


			yield put({
				type: `${action.type}` + SUCCESS,
				payload: dataTitle
			});


		} catch (err) {
			yield put({
				type: `${action.type}` + FAIL,
			});

		}
	})
}

function* fetchTask() {


	yield takeLatest(FETCH_TITLE_LIST + SUCCESS, function* () {

		const store = yield select();
		const dataTexts = store.projects.map(item => (
			{ id: item.id, isOpen: item === store.projects[0], text: [] }
		))
		yield put({
			type: CREATE_TASK_LIST,
			payload: dataTexts
		})

	})
}

function* deleteTab() {
	yield takeEvery(DELETE_TAB, function* (action) {


		yield put({
			type: DELETE_TITLE_ITEM,
			payload: action.payload
		})

		yield put({
			type: DELETE_TASK_TEXT
		})
	})
}

function* addTab() {
	yield takeEvery(ADD_TAB, function* (action) {

		const value = addId(action.payload, 'title')

		yield put({
			type: ADD_TITLE_ITEM,
			payload: value
		})


		yield put({
			type: ADD_TASK_TEXT,
			payload: { id: value.id, isOpen: true, text: [] }
		})
	})
}

export default function* () {
	yield all([
		fetchTitle(),
		fetchTask(),
		deleteTab(),
		addTab(),
	])
}
