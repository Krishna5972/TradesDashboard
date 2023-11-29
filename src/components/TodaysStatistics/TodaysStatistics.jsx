import React, { useEffect, useState } from "react";
import { filterTodaysTrades } from "../../utils/dateUtils";

function TodaysStatistics(props) {
  const [tradeStats, setTradeStats] = useState({
    totalTrades: 0,
    totalPnl: 0,
    pnlPercentage: 0,
  });

  const initialBalance = 600;

  useEffect(() => {
    const positionHistory = props.positionHistory;

    console.log(positionHistory);

    if (positionHistory) {
      const filteredTodaysData = filterTodaysTrades(positionHistory);

      const totalTrades = filteredTodaysData.length;
      const totalPnl = filteredTodaysData.reduce(
        (sum, trade) => sum + trade.realizedPnl,
        0
      );
      const pnlPercentage = (totalPnl / initialBalance) * 100;

      // Call the callback function instead of setting the state
      setTradeStats({
        totalTrades,
        totalPnl,
        pnlPercentage,
      });
    }
  }, [props.positionHistory]);

  return (
    <>
      <div class="todays-statistics-deep-dive">
        Trades Takens : {tradeStats.totalTrades}
      </div>
      <div class="todays-statistics-deep-dive">
        PNL : {tradeStats.totalPnl.toFixed(2)}
      </div>
      <div class="todays-statistics-deep-dive">
        Percentage Gain : {tradeStats.pnlPercentage.toFixed(2)}%
      </div>
    </>
  );
}

export default TodaysStatistics;
