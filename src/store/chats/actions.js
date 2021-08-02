// export const CHANGE_CHAT = 'CHATS::CHANGE_CHAT'
export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'
export const CHANGE_CURRENT_CHAT = 'CHATS::CHANGE_CURRENT_CHAT'

// export const changeChat = (id) => ({
// 	type: ADD_CHAT,
// 	name,
// })

export const addChat = (chatId, name) => ({
	type: ADD_CHAT,
	payload: {
		id: chatId,
		name,
	}
})

export const deleteChat = (chatId) => ({
	type: DELETE_CHAT,
	payload: {
		chatId,
	},
})
