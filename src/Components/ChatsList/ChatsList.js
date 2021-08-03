import "./ChatsList.sass"
import { useState } from 'react'
// import {useHistory} from 'react-router'
import { List, ListItem, IconButton, Input } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
// import { PATHS } from '../Constants'
import Chat from '../Chat/Chat'
import {useSelector, useDispatch} from 'react-redux'
// import { changeCurrentChat } from '../../store/chats/actions'
import { getChatsData } from '../../store/chats/selectors'
import { useHistory } from "react-router"
import { deleteChat, addChat } from '../../store/chats/actions'
import MessageInput from '../MessageInput/MessageInput'

function ChatsList() {
	const { chatsList, chatsCount } = useSelector(getChatsData)
	const [name, setName] = useState('')
	// const { currentChat } = useSelector((state) => state.chats)
	const dispatch = useDispatch()
	const history = useHistory()

	const onChatListClick = (chat) => {
		history.push(`/chats/${chat.id}`)
	}

	const onDeleteChatClick = (chatId) => {
		history.push(`/chats/chat1`)
		dispatch(
			deleteChat(chatId)
		)
	}

	const onchange = (e) => {
		console.log(e.target.value)
		setName(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			handlerOnClick(e.target.value)
		}
	}

	const onAddChatClick = (name) => {
		console.log(name)
		handlerOnClick(name)
	}

	const handlerOnClick = (name) => {
		// console.log(chatsList.lenght)
		dispatch(
			addChat(
				`chat${chatsCount+1}`, 
				name,
				chatsCount+1,
			)
		)
		setName('')	
	}

  return (
    <div className="chatslist" >
			<List  className="app__sidebar">
				{Object.values(chatsList).map((chat) => (
					<div key={chat.id}>
						<ListItem 
							button
							
							component='a'
							// selected={chat.id === currentChat.id}
							onClick={() => onChatListClick(chat)}
						>
							{chat.author}
						</ListItem>

						<IconButton
							color='inherit'
							variant="contained"
							onClick={() => onDeleteChatClick(chat.id)}
						>
								<DeleteIcon />
						</IconButton>						
					</div>

				))}			
				{/* <MessageInput
					updateData={onAddChatClick} 
					placeholder="Новый собеседник"
				/> */}
			</List>
	    <Input
	      label="Имя чата"
	      placeholder="Введите имя чата"
				onChange={onchange}
				onKeyDown={onkeydown}
				value={name}
	      onSubmit={onAddChatClick}
      />

			<div className='app__main'>
				<Chat />
			</div>
    </div>
  )
}

export default ChatsList