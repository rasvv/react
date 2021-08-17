import {render, screen} from '@testing-library/react'
import Message from './Message'

describe ('Message', () => {
	it('Проверка содержания текста Привет', () => {
		render (<Message text = 'Привет' className = 'mes' author = 'Валерий' date = '15.08.2021' />)

		const wrapper = screen.getByText(/Привет/i)

		expect(wrapper).toBeInTheDocument() 
	})
} )