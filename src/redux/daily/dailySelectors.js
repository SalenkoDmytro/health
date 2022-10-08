export const selectDailyProducts = state => state?.dailyRate;

export const selectDailySummaries = state => state.dailyRate.summaries;

// Тут быть внимательным, потому что приходит массив массивов!
