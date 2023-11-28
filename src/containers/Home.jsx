import React from "react";
import "./Home.css";

function Home() {
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
          3<div class="inner-child-right">Last 14 days bar graph</div>
          <div class="inner-child-right">
            Todays statistics
            <div class="todays-statistics">
              <div class="todays-statistics-deep-dive">Trades Taken</div>
              <div class="todays-statistics-deep-dive">PNL</div>
              <div class="todays-statistics-deep-dive">Win percentage</div>
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
