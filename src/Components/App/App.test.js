import { render, screen } from '@testing-library/react';
import App from './App';

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	connect: jest.fn
}))

test('renders learn react link', () => {
  // render(<App />);
	render (
		<Provider store = {{
			getState: jest.fn(() => ({})),
			dispatch: jest.fn()
		}}> 
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>

	)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
