import './Message.sass'
import {useSelector} from 'react-redux'
import { getProfileData } from '../../store/profile/selectors'

function Message() {
	const { name } = useSelector(getProfileData)

  return (
    <div className="Message">
			<div>
				<h3 className="h3">Добро пожаловать! <br/> Меня зовут <b>{name}</b></h3>
				<h4 className="h4">Давай немного поболтаем! <br/> Я умею читать слова задом-наперед.</h4>
			</div>
    </div>
  );
}

export default Message;