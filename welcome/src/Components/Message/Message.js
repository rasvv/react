import './Message.sass'

function Message(props) {

  return (
    <div className="Message">
			<div> {props.text}</div>
    </div>
  );
}

export default Message;