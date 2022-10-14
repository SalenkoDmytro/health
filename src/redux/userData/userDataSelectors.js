export const selectUDDayId = state => state.userData.dayId;
export const selectUDEatenProducts = state => {
  console.log(state);
  return state.userData.eatenProducts;
};
export const selectUDDailyRate = state => state.userData.dailyRate;
export const selectUDDaySummary = state => state.userData.daySummary;
export const selectUDBodyParams = state => state.userData.bodyParams;
export const selectUDNotAllowedProducts = state =>
  state.userData.notAllowedProducts;
export const selectUDIsLoading = state => state.userData.isLoading;
export const selectUDError = state => state.userData.error;
