import React, { useEffect, useRef } from 'react'
import "./ChatsList.sass"
// import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core'

function InteractiveList(props) {
	const isFirstRender = useRef(true)

	const [listSource] = React.useState([
		{ 'id': 0, robot: 'Michael' },
		{ 'id': 1, robot: 'Bob' },
		{ 'id': 2, robot: 'Whitney' },
		{ 'id': 3, robot: 'Jessica' },
	])

	const onClick = (e) => {
		props.updateData(e.target.innerText)
	}
		
	const onLoad = () => {
		props.updateData(listSource[0].robot)
	}
	
	useEffect(() => {
		if(isFirstRender.current) {
			onLoad()
			isFirstRender.current = false
		}
		
	})
	// onLoad()

  return (
    <div className="chatslist" >
			<List>
				{listSource.map((listitem) =>
					<ListItem 
						button 
						key={listitem.id} 
						className={ listitem.id === 0? "active": "" }
						onClick={onClick}
						
					>
						<ListItemText
							primary={ listitem.robot }
						/>
					</ListItem>
				)}
			</List>
    </div>
  )
}

export default InteractiveList