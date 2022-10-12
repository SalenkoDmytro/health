export const selectDay = state => state.day;
export const selectDayInfo = state => state.day.dayInfo;
export const selectDayIsLoading = state => state.day.isLoading;

export const selectDayId = state => state.day.dayId;
export const selectDate = state => state.day.date;
export const selectDaySummary = state => state.day.daySummary;
export const selectEatenProducts = state => state.day.eatenProducts;

// const diarySelector = {
//   selectDayId,
//   selectDate,
//   selectDaySummary,
//   selectEatenProducts,
// };

// export default diarySelector;
