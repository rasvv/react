// import './messagelist.sass'
import React from 'react'

function MessageList(props) {
	const {
		text,
		className,
		author,
		date
	} = props

	return (
		<p id={date} className={className}>
				<big>{text}</big>
				<br />
				<small>{author}  {date}</small>
		</p>			
	)
}

export default MessageList;
