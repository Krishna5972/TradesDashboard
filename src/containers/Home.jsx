import React, { useEffect, useState } from "react";
import "./Home.css";
import TodaysStatistics from "../components/TodaysStatistics/TodaysStatistics";
import { fetchPositionHistory } from "../services/api";
import { filterTodaysTrades } from "../utils/dateUtils";
import Last14Days from "../components/Last14Days/Last14Days";

function Home() {
  const [positionHistory, setPositionHistory] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedPositionHistory = await fetchPositionHistory();
      setPositionHistory(fetchedPositionHistory);
    };

    getData();
  }, []);

  return (
    <>
      <div class="container">
        <div class="child">
          1
          <div class="inner-child-left">
            Initial Capital,Current Balance, Forecasted Balance for next 6 days
          </div>
          <div class="inner-child-left">Recent Three trades</div>
          <div class="inner-child-left">Commision,funding</div>
          <div class="inner-child-left">S&P500, BTC vs Our strategy</div>
        </div>

        <div class="child">
          2<div class="inner-child-center">Date Selector</div>
          <div class="inner-child-center">Initial to Current Line plot</div>
          <div class="inner-child-center">initial to Current statistics</div>
        </div>

        <div class="child">
          3
          <div class="inner-child-right">
            <Last14Days positionHistory={positionHistory} />
          </div>
          <div class="inner-child-right">
            Todays statistics
            <div class="todays-statistics">
              <TodaysStatistics positionHistory={positionHistory} />
            </div>
          </div>
          <div class="inner-child-right">Open Positions</div>
          <div class="inner-child-right">Todays PNL Line Plot</div>
        </div>
      </div>
    </>
  );
}

export default Home;
