// export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_SHOW = 'PROFILE::CHANGE_SHOW'

// export const changeName = (name) => ({
// 	type: CHANGE_NAME,
// 	payload: {
// 		name
// 	}
// })

export const toggleShowName = (showName) => ({
	type: CHANGE_SHOW,
	payload: {
		showName
	}
})