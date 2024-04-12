import { types } from '../Actions/authTypes';

const initialState = {
	id: null,
	email: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			console.log('Recibida acción de inicio de sesión:', action);
			console.log('Estado anterior:', state);
			const newState = {
				id: action.payload.userId,
				email: action.payload.Email,
			};
			console.log('Nuevo estado:', newState);
			return newState;

		case types.startGoogleAuth:
		case types.startFacebookAuth:
			return {
				uid: action.payload.uid,
				email: action.payload.email,
				JWT: action.payload.JWT,
			};

		case types.logout:
			return initialState;

		default:
			return state;
	}
};
