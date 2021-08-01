import {ADD_MESSAGE} from './actions'

const messagesState = {
	chat1: [
		{id: 'message1', text: 'Привет', author: 'Валерий', date: '12:12:12'},
		{id: 'message2', text: 'Привет', author: 'Martin', date: '12:12:14'}
	]
	// messageList: [],
}

export default function messagesReduser(state = messagesState, action) {
	switch (action.type) {
		case ADD_MESSAGE: {
			// const currentList = state[action.chatId] || []
			return {
				// ...state,
				// messageList: {
				// 	...state.messageList,
				// 	[action.chatId]: [
				// 		...currentList,
				// 		{
				// 			...action.message,
				// 			id: `${action.chatId}${currentList.length}`,
				// 		},
				// 	],
				// },
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