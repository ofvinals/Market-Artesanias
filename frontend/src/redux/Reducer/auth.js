import { types } from '../Actions/authTypes';

const initialState = {
	uid: null,
	displayName: null,
	JWT: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				displayName: action.payload.displayName,
				JWT: action.payload.JWT,
			};

		case types.basicAuth:
			return {
				uid: action.payload.uid,
				displayName: action.payload.displayName,
				JWT: action.payload.JWT,
			};

			case types.startGoogleAuth:
				case types.startFacebookAuth:
					return {
						uid: action.payload.uid,
						displayName: action.payload.displayName,
						JWT: action.payload.JWT,
					};

		case types.logout:
			return initialState;

		default:
			return state;
	}
};
