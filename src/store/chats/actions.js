// export const CHANGE_CHAT = 'CHATS::CHANGE_CHAT'
export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'

// export const changeChat = (id) => ({
// 	type: ADD_CHAT,
// 	name,
// })

export const addChat = (name) => ({
	type: ADD_CHAT,
	name,
})

export const removeChat = (id) => ({
	type: DELETE_CHAT,
	id,
})