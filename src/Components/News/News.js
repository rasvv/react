// import transport from '../../services/transport'
import './news.sass'
import { Button, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/news/actions'
// import * as React from 'react';


// import { API_URL } from '../Constants'


export default function News() {
const { list } = useSelector((state) => state.news)
const newsList = list['response']

const dispatch = useDispatch()

	const loadData = () => dispatch(fetchNews())

	return(
		<div>
			<p>Новости футбола</p>
			<Button onClick={loadData}>Загрузить новости</Button>

			<div className="bordered">
			{newsList?.length ? (
				newsList.map((newsItem) => (
					<Card 
						style={{displey: 'flex'}}
						// button
						// component='a'
						link={newsItem.matchviewUrl}
					>
						<CardActionArea className='flexed'>
							<CardMedia
								style={{height: '250px', width: '350px'}}
								component="img"
								alt="Contemplative Reptile"
								object-fit="contein"
								image={ newsItem.thumbnail }
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									{  newsItem.competition }	
								</Typography>
								<Typography gutterBottom variant="h5" component="h5">
									{  newsItem.title }
								</Typography>
								{/* <Typography variant="body2" color="textSecondary" component="p">
									{  newsItem.matchviewUrl }	
								</Typography> */}
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
				))
			):null}
			</div>
		</div>



	)

}