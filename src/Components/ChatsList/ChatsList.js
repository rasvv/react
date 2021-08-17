import "./ChatsList.sass"
import { useState, useEffect } from 'react'
import { List, ListItem, IconButton, Input } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Chat from '../Chat/Chat'
import {useSelector, useDispatch} from 'react-redux'
import { getChatsData } from '../../store/chats/selectors'
import { useHistory } from "react-router"
import { deleteChatfromDB, addChatToDB, subscribeChatsChanging } from '../../store/chats/actions'

function ChatsList() {
	const { chatsList, chatsCount } = useSelector(getChatsData)
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()


	useEffect(() => {
		dispatch(subscribeChatsChanging())
	}, [])

	const onChatListClick = (chat) => {
		history.push(`/chats/${chat.id}`)
	}

	const onDeleteChatClick = (chatId) => {
		history.push(`/chats/chat1`)
		dispatch(
			deleteChatfromDB(chatId)
		)
	}

	const onchange = (e) => {
		setName(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			handlerOnClick(e.target.value)
		}
	}

	const onAddChatClick = (name) => {
		handlerOnClick(name)
	}

	const handlerOnClick = (name) => {
		dispatch(
			addChatToDB(
				`chat${chatsCount+1}`, 
				name,
				chatsCount+1,
			)
		)
		setName('')	
	}

  return (
    <div className="chatslist container" >
			<List  className="app__sidebar">
			<h4>Мои собеседники</h4>
				<div className="chatslist__list">
					{Object.values(chatsList).map((chat) => (
						<div className="flexed" key={chat.id}>
							<ListItem 
								className="chatslistlink" 
								button
								component='a'
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
				</div>
				<Input
					className="chatslistinput" 
					color='secondary'
		      placeholder="Введите имя нового собеседника"
					onChange={onchange}
					onKeyDown={onkeydown}
					value={name}
		      onSubmit={onAddChatClick}
	      />
			</List>


			<div className='app__main'>
				<Chat />
			</div>
    </div>
  )
}

export default ChatsList