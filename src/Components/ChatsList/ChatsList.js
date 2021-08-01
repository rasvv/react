import "./ChatsList.sass"
// import {useHistory} from 'react-router'
import { List, ListItem } from '@material-ui/core'
// import { PATHS } from '../Constants'
import Chat from '../Chat/Chat'
import {useSelector, useDispatch} from 'react-redux'
import { changeCurrentChat } from '../../store/chats/actions'

function ChatsList() {
	const { chatsList, currentChat } = useSelector((state) => state.chats)
	// const { currentChat } = useSelector((state) => state.chats)
	const dispatch = useDispatch()
	// const currentChat = useSelector((state) => state.chats.currentChat)

	// const {
	// 	chats = [],
	// 	currentChat,
	// 	onCurrentChatChange
	// } = props
	// const history = useHistory()

	// const onChatListClick = (chat) => {
	// 	onCurrentChatChange(chat)
	// 	history.push(`${PATHS.chatsLink}/${chat.id}`)
	// }

	const onChatListClick = (chat) => {
		// console.log(chat)
		dispatch(
			changeCurrentChat(chat)
		)
	}

  return (
    <div className="chatslist" >
			<List  className="app__sidebar">
				{chatsList.map((chat) => (
					<ListItem 
						button
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
					// chats={props.chats}
					// currentChatChat={props.currentChatChat}
					// currentChat={props.currentChat}
					// onCurrentChatChange={props.onCurrentChatChange}
					// checkChatExists={props.checkChatExists}
				/>
			</div>
    </div>
  )
}

export default ChatsList