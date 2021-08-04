export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const addMessage = ( chatId, message ) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId, 
		message,
	},
})

export const addMessageThunk = ( chatId, message ) => {
	return (dispatch, getState) => {
			console.log(getState())
			dispatch(addMessage( chatId, message ))

			let mes = messages[messages.length - 1]		
			if (mes) {
				if (mes.author !== currentChat.author)
					setTimeout(() => {
						addMessage(chatId, {
							id: `${Date.now()}`,
							author: message.author,
							text: message['text'].split('').reverse().join(''), 
							date: new Date().toLocaleTimeString(),				
						})
						// onAddMessage(mes['text'].split('').reverse().join(''), currentChat.author)
					}, 1500)
			}

			// setTimeout(() => {
			// 		dispatch(changeIsOnline(isOnline))
			// }, 1000)
	}
}