import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAMountBySeller } from "../../services/apiService";
import { SaleSum } from "../../types/sale";

type ChartData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  /*
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    */

  useEffect(() => {
    getAMountBySeller().then((data) => {
      const result = data as SaleSum[];
      const myLabels = result.map((x) => x.sellerName);
      const mySeries = result.map((x) => x.sum);
      
      setChartData({ labels: myLabels, series: mySeries });
    });
  }, [chartData]);

  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
