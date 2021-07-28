import { 
	CHANGE_NAME, 
	CHANGE_SHOW_NAME, 
	CHANGE_SHOW_AGE, 
	CHANGE_SHOW_NAME_INPUT 
} from '../actions/profile'

const initialState = {
	name: 'Валерий',
	age: 46, 
	showName: true,
	showAge: false,
	showNameInput: false
	
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME: {
			return {
				...state,
				name: action.payload.name,
			}
		}
		case CHANGE_SHOW_NAME: {
			return {
				...state,
				showName: action.payload.showName,
			}
		}
		case CHANGE_SHOW_AGE: {
			return {
				...state,
				showAge: action.payload.showAge,
			}
		}
		case CHANGE_SHOW_NAME_INPUT: {
			return {
				...state,
				showNameInput: action.payload.showNameInput,
			}
		}
		default:
			return state
	}
}