import { 
	ADD_CHAT, 	
	DELETE_CHAT, 
} from './actions'

const chats = ([
	{id: 'chat1',	author: 'Martin'},
	{id: 'chat2',	author: 'Jessica'},
	{id: 'chat3',	author: 'Michael'},
])

const chatsState = {
	chatsList: chats,
	chatsCount: 3,
}

export default function chatsReducer(state = chatsState, action) {
	switch (action.type) {
		case ADD_CHAT: {
			return {
				...state,
				chatsList: [
					...state.chatsList,
					{
						id: action.payload.id,
						author: action.payload.name,
					}
				], 
				chatsCount:action.payload.count
			}
		}
		case DELETE_CHAT: {
			return {
				...state,
				chatsList: state.chatsList.filter((chat) => chat.id !== action.payload.chatId)
			}
		}
		default:
			return state
	}
}