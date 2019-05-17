import * as registration from './action';

const defaultState = {
	email: '',
	password: '',
	repeatPassword: ''
};

export const registrationReducer =(state = defaultState, action) => {
	console.log(state);
	switch (action.type) {
		case	registration.REGISTRATION_CHANGE_EMAIL_TEXT:
			return {
				...state,
				email: action.payload
			};
		case	registration.REGISTRATION_CHANGE_PASSWORD_TEXT:
			return {
				...state,
				password: action.payload
			};
		case	registration.REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT:
			return {
				...state,
				repeatPassword: action.payload
			};
		default: return state;
	}
};