export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const addMessage = ( chatId, message ) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId, 
		message,
	},
})

export const addMessageThunk = ( chatId, message, name ) => {
	return (dispatch, getState) => {
		dispatch(addMessage( chatId, message ))

		console.log(message.author, name);
		if (message.author !== name)
		setTimeout(() => dispatch(
				addMessage(chatId, {
					id: `${Date.now()}`,
					author: name,
					text: message['text'].split('').reverse().join(''),
					date: new Date().toLocaleTimeString(),
				})
			), 1500
		)
	}
}