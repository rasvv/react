import Message from './Message/Message';
import './App.sass'

function App(props) {
	return (
    <div className="App">
      <header className="App-header header">
				My first React App
      </header>
			<Message 	text = {
			<div>
				<h3 className="h3">Добро пожаловать, мой друг, Карлсон!</h3>
				<h4 className="h4">Ну и ты, <span>{props.name}</span>, заходи!</h4>
			</div>}/>
    </div>
  );
}

export default App;
