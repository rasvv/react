import { API_URL } from '../../Components/Constants'
import transport from '../../services/transport'

export const SET_NEWS_LIST = 'NEWS::SET_NEWS_LIST'

export const setNewsList = (newsList) => ({
	type: SET_NEWS_LIST,
	payload: {
		newsList
	}
})

export const fetchNews = () => {
	return async (dispatch, getState) => {
		try {
			const { data } = await transport.get(API_URL)
			dispatch(setNewsList(data))
		} catch (error) {
			console.error('error', error)
		}
	}
} 