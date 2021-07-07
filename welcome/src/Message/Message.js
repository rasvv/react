import './Message.sass'

function Message(props) {

  return (
    <div className="Message">
      <header className="Message-header header">
				<div> {props.text}</div>
      </header>
    </div>
  );
}

export default Message;