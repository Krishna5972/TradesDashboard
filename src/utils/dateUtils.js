export const filterTodaysTrades = (data) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return data.filter((trade) => {
    const tradeDate = new Date(trade.utc_time);
    tradeDate.setHours(0, 0, 0, 0);
    return tradeDate.getTime() === today.getTime();
  });
};

export function filterLast14Days(data) {
  const currentDate = new Date();

  const fourteenDaysAgo = new Date(
    currentDate.getTime() - 14 * 24 * 60 * 60 * 1000
  );

  return data.filter((item) => {
    const itemDate = new Date(item.utc_time);

    return itemDate >= fourteenDaysAgo;
  });
}
