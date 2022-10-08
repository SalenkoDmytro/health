export const selectUser = state => state.user;

export const selectUserIsLoggedIn = state => state.user.isLoggedIn;

export const selectUserIsLoading = state => state.user.isLoading;
//  add user data

export const getUserData = state => state.user.userData;
