export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME'
export const CHANGE_SHOW_NAME_INPUT = 'PROFILE::CHANGE_SHOW_NAME_INPUT'
export const CHANGE_SHOW_AGE = 'PROFILE::CHANGE_SHOW_AGE'

export const changeName = (name) => ({
	type: CHANGE_NAME,
	payload: {
		name,
	}
})

export const toggleShowName = (showName) => ({
	type: CHANGE_SHOW_NAME,
	payload: {
		showName,
	}
})

export const toggleShowNameInput = (showNameInput) => ({
	type: CHANGE_SHOW_NAME_INPUT,
	payload: {
		showNameInput,
	}
})

export const toggleShowAge = (showAge) => ({
	type: CHANGE_SHOW_AGE,
	payload: {
		showAge,
	}
})