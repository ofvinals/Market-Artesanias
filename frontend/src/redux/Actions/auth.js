import { types } from '../Actions/authTypes';

export const login = (userId, Email) => ({
	type: types.login,
	payload: { userId, Email },
});

export const logout = () => ({
	type: types.logout,
});
