import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { femaleHeightWeight, maleHeightWeight } from "../Home/HomeChart4/height-wieht-data";

const HomeChart4 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: "Weight vs Height",
    },
    subtitle: {
      text: "by gender",
    },
    series: [
      {
        type: "scatter",
        title: "Male",
        data: maleHeightWeight,
        xKey: "height",
        xName: "Height",
        yKey: "weight",
        yName: "Weight",
      },
      {
        type: "scatter",
        title: "Female",
        data: femaleHeightWeight,
        xKey: "height",
        xName: "Height",
        yKey: "weight",
        yName: "Weight",
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: {
          text: "Height",
        },
        label: {
          formatter: (params) => {
            return params.value + "cm";
          },
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Weight",
        },
        label: {
          formatter: (params) => {
            return params.value + "kg";
          },
        },
      },
    ],
  });

  return <AgCharts options={options} />;
};

const root = createRoot(document.getElementById("root")!);
root.render(<HomeChart4 />);

export default HomeChart4;