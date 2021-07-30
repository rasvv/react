import { 
	// CHANGE_CHAT, 	
	ADD_CHAT, 	
	DELETE_CHAT, 
} from './actions'

const chats = ([
	{id: 'chat1',	author: 'Martin', chat:[]},
	{id: 'chat2',	author: 'Jessica', chat:[]},
	{id: 'chat3',	author: 'Michael', chat:[]},
])

const chatsState = {
	chatsList: chats,
	currentChat: chats[0],
}

export default function chatsReducer(state = chatsState, action) {
	switch (action.type) {
		// case CHANGE_CHAT: {
		// 	return {
		// 		...state,
		// 		chatsList: action.payload.chatsList,
		// 	}
		// }
		case ADD_CHAT: {
			return {
				...state,
				chatsList: [
					...state.chatsList,
					{
						id: `id${state.chatsList.length}`,
						name: action.name,
					},
				],
			}
		}
		case DELETE_CHAT: {
			return {
				...state,
				chatsList: state.chatsList.filter((chat) => chat.id === action.id)
			}
		}
		default:
			return state
	}
}