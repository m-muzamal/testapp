import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: "100%",
        type: "area",
      },
      title: {
        text: "Network Monitoring",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#0000FF', '#00FF00', '#FF0000', '#E91E63', '#FF9800'],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          'Week 1', 
          'Week 2', 
          'Week 3', 
          'Week 4', 
          'Week 5', 
          'Week 6', 
          'Week 7'
        ],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 120,
        tickAmount: 10,
      }
    },
  });

  return (
    <div className="myChart">
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}  
          type="area"
          height= "100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
  
export default ApexChart;
