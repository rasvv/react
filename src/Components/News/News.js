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
			<Button 
				color="primary"
				onClick={loadData}
				variant="outlined"
			>
				Загрузить новости
			</Button>

			<div className="bordered newscontainer">
			{newsList?.length ? (
				newsList.map((newsItem) => (
					<Card 
						key={newsItem.matchviewUrl}
						href={newsItem.matchviewUrl}
					>
						<CardActionArea className='flexed'>
							<CardMedia
								component="img"
								alt="Preview"
								image={ newsItem.thumbnail }
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									{  newsItem.competition }	
								</Typography>
								<Typography gutterBottom variant="h5" component="h5">
									{  newsItem.title }
								</Typography>

							</CardContent>
						</CardActionArea>
					</Card>
				))
			):null}
			</div>
		</div>



	)

}