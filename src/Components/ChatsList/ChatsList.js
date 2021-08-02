import "./ChatsList.sass"
// import {useHistory} from 'react-router'
import { List, ListItem, IconButton } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete'
import DeleteIcon from '@material-ui/icons/Delete'
// import { PATHS } from '../Constants'
import Chat from '../Chat/Chat'
import {useSelector, useDispatch} from 'react-redux'
// import { changeCurrentChat } from '../../store/chats/actions'
import { getChatsData } from '../../store/chats/selectors'
import { useHistory } from "react-router"
import { deleteChat } from '../../store/chats/actions'


function ChatsList() {
	const { chatsList } = useSelector(getChatsData)
	// const { currentChat } = useSelector((state) => state.chats)
	const dispatch = useDispatch()
	const history = useHistory()

	const onChatListClick = (chat) => {
		history.push(`/chats/${chat.id}`)
	}

	const onDeleteChatClick = (chatId) => {
		dispatch(
			deleteChat(chatId)
		)
	}

  return (
    <div className="chatslist" >
			<List  className="app__sidebar">
				{Object.values(chatsList).map((chat) => (
					<div>
						<ListItem 
							button
							key={chat.id}
							component='a'
							// selected={chat.id === currentChat.id}
							onClick={() => onChatListClick(chat)}
						>
							{chat.author}
						</ListItem>

						<IconButton
								variant="contained"
								onClick={() => onDeleteChatClick(chat.id)}
						>
								<DeleteIcon />
						</IconButton>						
					</div>

				))}				
			</List>
			<div className='app__main'>
				<Chat />
			</div>
    </div>
  )
}

export default ChatsList