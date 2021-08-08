import {SET_NEWS_LIST} from './actions'

const newsState = {
	list: [],
	// status
}

export default function newsReducer(state = newsState, action) {
	switch (action.type) {
		case SET_NEWS_LIST:
			return {
				...state,
				list: action.payload.newsList,
			}
		default:
			return state
	}
}