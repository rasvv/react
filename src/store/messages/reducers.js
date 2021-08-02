import {ADD_MESSAGE} from './actions'

const messagesState = {

}

export default function messagesReduser(state = messagesState, action) {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				[action.payload.chatId]: [
						...(state[action.payload.chatId] || []),
						action.payload.message,
				],
			}
		}
		default:
			return state
	}
}