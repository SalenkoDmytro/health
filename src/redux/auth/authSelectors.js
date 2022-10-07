export const selectUserName = state => state.auth.user.username;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectToken = state => state.auth.token;
