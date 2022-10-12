export const selectDay = state => {
  console.log(state.day.day);
  return state.day;
};
export const selectDayInfo = state => state.day.dayInfo;

export const selectDayIsLoading = state => state.day.isLoading;
