import React from 'react'
import './profile.sass'
import { FormControlLabel, Checkbox, Input } from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import { toggleShowName, toggleShowAge, toggleShowNameInput, changeName } from '../../store/profile/actions'
import { getProfileData } from '../../store/profile/selectors'



export default function Profile() {
	const { showName, showNameInput, showAge, name, age } = useSelector(getProfileData)
	const dispatch = useDispatch()

	const setSName = (event) => {
		dispatch(changeName(event.target.value))
	}

	const setShowName = (event) => {
		dispatch(toggleShowName(event.target.checked))
	}

	const setShowAge = (event) => {
		dispatch(toggleShowAge(event.target.checked))
	}

	const setShowNameInput = (event) => {
		dispatch(toggleShowNameInput(event.target.checked))
	}

	return (
		<div>
			<h3> Страница профиля</h3>
			<FormControlLabel
				className='lined'
				control= {
					<Checkbox
					  label="Inherit"
						checked={showName}
						onChange={setShowName}
						name='ChB'
						color='primary'
					/>
				}
				label='Показать имя'
			/>
			{showName && 
				<div className='lined'>
					<b className='font'>{ name }</b>
					{/* <br/> */}
						<Checkbox
							checked={showNameInput}
							onChange={setShowNameInput}
							name='ChBName'
							color='primary'
						/>
					Изменить имя
				</div>
			}
			{showName && showNameInput && 
				<div className='lined'>
					<Input
						autoFocus
						type='text'
						value={name}
						onChange={setSName}
					/>
				</div>
			}
			<br/>
			<FormControlLabel
				control= {
					<Checkbox
						checked={showAge}
						onChange={setShowAge}
						name='ChBAge'
						color='primary'
					/>
				}
				label='Показать возраст'
			/>
			{showAge && <div className='lined'><b>{ age }</b></div>}
		</div>
	)
}
