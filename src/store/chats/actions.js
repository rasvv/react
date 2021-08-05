export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'


export const addChat = (id, name, count) => ({
	type: ADD_CHAT,
	payload: {
		id,
		name,
		count,
	}
})

export const deleteChat = (chatId) => ({
	type: DELETE_CHAT,
	payload: {
		chatId,
	},
})
