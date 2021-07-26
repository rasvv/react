import "./ChatsList.sass"
import {useHistory} from 'react-router'
import { List, ListItem } from '@material-ui/core'
import { PATHS } from '../Constants'
import Chat from '../Chat/Chat'


function ChatsList(props) {
	const {
		chats = [],
		currentChat,
		onCurrentChatChange
	} = props
	const history = useHistory()

	const onChatListClick = (chat) => {
		onCurrentChatChange(chat)
		history.push(`${PATHS.chatsLink}/${chat.id}`)
	}

  return (
    <div className="chatslist" >
			<List  className="app__sidebar">
				{chats.map((chat) => (
					<ListItem 
						key={chat.id}
						selected={chat.id === currentChat.id}
						onClick={() => onChatListClick(chat)}
					>
						{chat.author}
					</ListItem>
				))}				
			</List>
			<div className='app__main'>
				<Chat 
					chats={props.chats}
					currentChatChat={props.currentChatChat}
					currentChat={props.currentChat}
					onCurrentChatChange={props.onCurrentChatChange}
					checkChatExists={props.checkChatExists}
				/>
			</div>
    </div>
  )
}

export default ChatsList