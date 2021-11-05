import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { round } from "utils/format";
import { getSuccessBySeller } from '../../services/apiService';
import { SaleSuccess } from "../../types/sale";

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

type SeriesData = {
  name: string;
  data: number[];
};

const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    getSuccessBySeller().then((data) => {
      const result = data as SaleSuccess[];
      const myLabels = result.map((x) => x.sellerName);
      const mySeries = result.map((x) => round(100.0 * (x.deals / x.visited), 1) );
      
      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
            name: "% success",
            data: mySeries,
          }
        ],
      });
      console.log(chartData);
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  /*
  const mockData = {
    labels: {
      categories: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1],
      },
    ],
  };
  */

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
