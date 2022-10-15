export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.username;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserId = state => state.auth.user.id;

export const selectRefreshToken = state => state.auth.refreshToken;
export const selectAccessToken = state => state.auth.accessToken;
export const selectSID = state => state.auth.sid;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;

// export const selectisRegistered = state => state.auth.isRegistered;
