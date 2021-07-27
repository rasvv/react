// import {Callback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {useCallback} from 'react'
// import {showName} from state


function Profile() {
	const { showName, name } = useSelector((state) => state.profile)
	const dispatch = useDispatch()

	const toggleShowName = (showName) => {
		return {showName} ? 'false' : 'true' 
	}

	const setShowName = (event) => {
		// const new
		console.log(event.target.checked)
		dispatch(toggleShowName(event.target.checked))
	}


	return (
		<div>
			<h3> Страница профиля</h3>
			<input 
				type='checkbox'
				checked={showName}
				value={showName}
				onChange={setShowName}
			/>
			<span>ShowName</span>
			{/* {showName && <div>{ name }</div>} */}
		</div>
	)
}

export default Profile