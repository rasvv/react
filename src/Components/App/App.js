import './App.sass'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import { PATHS } from '../Constants'


function App() {
	return (
		<div className="app">
			<header className="app-header header">
				My messenger
				<div className="menu">
					<Link to={PATHS.homeLink}>Главная</Link>
					<Link to={PATHS.chatsLink}>Чаты</Link>
					<Link to={PATHS.profileLink}>Профиль</Link>
					<Link to={PATHS.newsLink}>Новости</Link>
				</div>
			</header>
				<Router	/>
		</div>
	);
}

export default App;
