import React, { useEffect, useState } from "react";
import { filterLast14Days } from "../../utils/dateUtils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Last14Days(props) {
  const [last14DaysData, setLast14DaysData] = useState({});

  useEffect(() => {
    const positionHistory = props.positionHistory;

    if (positionHistory) {
      const filteredPositionHistory = filterLast14Days(positionHistory);

      const aggregatedData = filteredPositionHistory.reduce((acc, curr) => {
        const dateKey = new Date(curr.utc_time)
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\/\d{4}/, "");
        acc[dateKey] = (acc[dateKey] || 0) + curr.realizedPnl;
        return acc;
      }, {});

      const chartData = Object.keys(aggregatedData).map((key) => ({
        date: key,
        pnl: aggregatedData[key],
      }));

      setLast14DaysData(chartData);
    }
  }, [props.positionHistory]);

  return (
    <>
      <BarChart width={600} height={300} data={last14DaysData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pnl" fill="#8884d8" barSize={20} />
      </BarChart>
    </>
  );
}

export default Last14Days;
