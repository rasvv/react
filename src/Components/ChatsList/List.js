import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core'


// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ListItemText from '@material-ui/core/ListItemText'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList() {
	const [listSource, setListSource] = React.useState([
		{ 'key':0, robot:'Michael' },
		{ 'key':1, robot:'Bob' },
		{ 'key':2, robot:'Whitney' },
		{ 'key':3, robot:'Jessica' },
	])

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div >
            <List>
							{listSource.map((listitem) =>
                <ListItem button key={ listitem.key }>
                  <ListItemText
                    primary={ listitem.robot }
                  />
                </ListItem>
							)}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
