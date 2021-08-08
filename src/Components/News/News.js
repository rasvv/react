// import transport from '../../services/transport'
import '../App/App.sass'
import { Button, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/news/actions'
// import * as React from 'react';


// import { API_URL } from '../Constants'


export default function News() {
const { list } = useSelector((state) => state.news)

const dispatch = useDispatch()

	const loadData = () => dispatch(fetchNews())

	return(
		<div>
			<p>News</p>
			<Button onClick={loadData}>Загрузить новости</Button>

    {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid rowHeight={25} {...list} />
    </div> */}



			<div className="bordered">
				{list.map((newsItem) => (
					<Card style={{displey: 'flex'}}>
						<CardActionArea className='flexed'>
							<CardMedia
								style={{height: '250px', width: '350px'}}
								component="img"
								alt="Contemplative Reptile"
								object-fit="contein"
								image={ newsItem.imageUrl }
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h5">
									{  newsItem.title }
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{  newsItem.summary }	
								</Typography>
							</CardContent>
						</CardActionArea>
						{/* <CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions> */}
					</Card>
					// <li key={newsItem.id}>
					// 	<p>{newsItem.title}</p>
					// </li>
				))}
			</div>
		</div>



	)

}