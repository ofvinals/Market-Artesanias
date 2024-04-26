import { types } from '../Actions/authTypes';

export const login = (userId, Email, Admin) => ({
	type: types.login,
	payload: { userId, Email, Admin },
});

export const logout = () => ({
	type: types.logout,
});
