import firebase from 'firebase'

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

export const addChatToDB = (chatId, name, count) => {
	return () => {
		firebase.database().ref('chats').child(chatId).push({id: chatId, name, count})
	}
}

export const deleteChatfromDB = (chatId) => {
	return async (dispatch) => {
		try {
			await firebase.database().ref('chats').child(chatId).remove()
			dispatch(deleteChat(chatId))
		} catch (error) {
			console.error(error.message)
		}
	}
}

export const subscribeChatsChanging = () => {
	return (dispatch, getState) => {
		firebase.database().ref('chats').on('child_added', (snapshot) => {
			const {id: chatId, name, count} = Object.values(snapshot.val())[0]
			dispatch(addChat(chatId, name, count))
		})

		firebase.database().ref('chats').on('child_changed', (snapshot) => {
			const {id: chatId, name, count} = Object.values(snapshot.val())[0]
			dispatch(addChat(chatId, name, count))
		})		
	}
}