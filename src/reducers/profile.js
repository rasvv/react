import { CHANGE_SHOW } from '../actions/profile'

const initialState = {
	name: 'Валерий',
	age: 46, 
	showName: true
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		// case CHANGE_NAME: {
		// 	return {
		// 		...state,
		// 		name: action.payload.name
		// 	}
		// }
		case CHANGE_SHOW: {
			return {
				...state,
				showName: action.payload.showName
			}
		}
		default:
			return state
	}
}