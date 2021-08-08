import {SET_NEWS_LIST, SET_LOADING_STATUS, SET_IDLE_STATUS, SET_ERROR_STATUS} from './actions'
import { NEWS_REQUEST_STATUS } from '../../Components/Constants'

const newsState = {
	list: [],
	status: NEWS_REQUEST_STATUS.IDLE,
	error: null
}

export default function newsReducer(state = newsState, action) {
	switch (action.type) {
		case SET_NEWS_LIST:
			return {
				...state,
				list: action.payload.newsList,
			}
		case SET_LOADING_STATUS:
			return {
				...state,
				status: NEWS_REQUEST_STATUS.LOADING,
			}
		case SET_IDLE_STATUS:
			return {
				...state,
				status: NEWS_REQUEST_STATUS.IDLE,
			}
		case SET_ERROR_STATUS:
			return {
				...state,
				status: NEWS_REQUEST_STATUS.ERROR,
			}
		default:
			return state
	}
}