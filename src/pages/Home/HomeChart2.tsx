import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "../Home/HomeChart2/Data";

const HomeChart2 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  });

  return (
    <div style={{ width: '60%', height: '500px' }}> {/* Adjust width and height as needed */}
      <AgCharts options={options} />
    </div>
  );
};
const root = createRoot(document.getElementById("root")!);
root.render(<HomeChart2 />);

export default HomeChart2;