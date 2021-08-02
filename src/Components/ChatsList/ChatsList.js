import "./ChatsList.sass"
// import {useHistory} from 'react-router'
import { List, ListItem } from '@material-ui/core'
// import { PATHS } from '../Constants'
import Chat from '../Chat/Chat'
import {useSelector} from 'react-redux'
// import { changeCurrentChat } from '../../store/chats/actions'
import { getChatsData } from '../../store/chats/selectors'
import { useHistory } from "react-router"

function ChatsList() {
	const { chatsList } = useSelector(getChatsData)
	// const { currentChat } = useSelector((state) => state.chats)
	// const dispatch = useDispatch()
	const history = useHistory()

	const onChatListClick = (chat) => {
		history.push(`/chats/${chat.id}`)
	}

  return (
    <div className="chatslist" >
			<List  className="app__sidebar">
				{Object.values(chatsList).map((chat) => (
					<ListItem 
						button
						key={chat.id}
						component='a'
						// selected={chat.id === currentChat.id}
						onClick={() => onChatListClick(chat)}
					>
						{chat.author}
					</ListItem>
				))}				
			</List>
			<div className='app__main'>
				<Chat />
			</div>
    </div>
  )
}

export default ChatsList