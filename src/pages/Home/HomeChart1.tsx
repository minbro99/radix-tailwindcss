import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";

// Define the IData interface to describe the data structure
interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

const ChartExample = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ] as IData[],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
      } as AgBarSeriesOptions,
    ],
  });

  return (
    <div style={{ width: '50%', height: '400px' }}> {/* Adjust width and height as needed */}
      <AgCharts options={options} />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<ChartExample />);

export default ChartExample;
