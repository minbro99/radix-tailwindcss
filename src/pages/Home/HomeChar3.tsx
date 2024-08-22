import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "../Home/HomeChart3/Data";

const HomeChart3 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Annual Fuel Expenditure",
    },
    data: getData(),
    series: [
      {
        type: "line",
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
      },
      {
        type: "line",
        xKey: "quarter",
        yKey: "diesel",
        yName: "Diesel",
      },
    ],
  });

  return (
    <div style={{ width: '50%', height: '400px' }}> {/* Adjust width and height as needed */}
      <AgCharts options={options} />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<HomeChart3 />);

export default HomeChart3;