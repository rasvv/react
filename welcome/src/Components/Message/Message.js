import './Message.sass'

function Message(props) {

  return (
    <div className="Message">
			<div>
				<h3 className="h3">Добро пожаловать, <span>{props.name}</span>. Меня зовут Robot</h3>
				<h4 className="h4">Давай немного поболтаем! <br/> Я умею читать слова задом-наперед.</h4>
			</div>
    </div>
  );
}

export default Message;