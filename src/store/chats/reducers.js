import { 
	// CHANGE_CHAT, 	
	ADD_CHAT, 	
	DELETE_CHAT, 
	CHANGE_CURRENT_CHAT,
} from './actions'

const chats = ([
	{id: 'chat1',	author: 'Martin'},
	{id: 'chat2',	author: 'Jessica'},
	{id: 'chat3',	author: 'Michael'},
])

const chatsState = {
	chatsList: chats,
	// currentChat: chats[0],
}

export default function chatsReducer(state = chatsState, action) {
	switch (action.type) {
		case ADD_CHAT: {
			return {
				...state,
				[action.payload.id]: action.payload,
			}
		}
		case DELETE_CHAT: {
			delete state[action.payload.chatId]
			return {
				...state,
				// chatsList: state.chatsList.filter((chat) => chat.id === action.payload.chatId)
			}
		}
		default:
			return state
	}
}