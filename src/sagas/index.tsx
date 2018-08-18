import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import {
	START, SUCCESS, FAIL, ADD_TASK_TEXT, DELETE_TASK_TEXT,
	CREATE_TASK_LIST, DELETE_TAB, ADD_TAB, FETCH_PROJECTS, DELETE_PROJECT, ADD_PROJECT
} from "../constants";
import getData from '../api'

import { randomId } from './../helpers'



export const addAttr = (item: Array<string> | string, index?: number) =>
	({ id: randomId(), isOpen: index === 0, name: item })




function* fetchTitle() {
	yield takeLatest(FETCH_PROJECTS, function* ({ type }) {

		yield put({
			type: `${type}` + START,
		})

		try {
			const responseArr: Array<Object> = yield call(getData);
			const dataTitle = responseArr.map((item: { name: string, id: number }, index) => addAttr(item.name, index))


			yield put({
				type: `${type}` + SUCCESS,
				payload: dataTitle
			});


		} catch (err) {
			yield put({
				type: `${type}` + FAIL,
			});

		}
	})
}

function* fetchTask() {


	yield takeLatest(FETCH_PROJECTS + SUCCESS, function* () {

		const store = yield select();
		const dataTexts = store.projects.map((item: { id: number }) => (
			{ id: item.id, text: [] }
		))
		yield put({
			type: CREATE_TASK_LIST,
			payload: dataTexts
		})

	})
}

function* deleteTab() {
	yield takeEvery(DELETE_TAB, function* (action: { type: string, payload: number }) {

		yield put({
			type: DELETE_PROJECT,
			payload: action.payload
		})

		yield put({
			type: DELETE_TASK_TEXT
		})
	})
}

function* addTab() {
	yield takeEvery(ADD_TAB, function* (action: { type: string, payload: string }) {

		const value = addAttr(action.payload, 0)


		yield put({
			type: ADD_PROJECT,
			payload: value
		})


		yield put({
			type: ADD_TASK_TEXT,
			payload: { id: value.id, text: [] }
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
