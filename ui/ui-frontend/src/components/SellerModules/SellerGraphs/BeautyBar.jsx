import React from "react";
import { useState, useEffect } from "react";
import { BeautyService } from "../../../Services/BeautyService";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BeautyBar = () => {
  const [beauty, setBeauty] = useState();
  const sellerName = localStorage.getItem("name");
  const data = {
    labels: ["Number Of Beauty Products"],
    datasets: [
      {
        data: [beauty],
        backgroundColor: "blue",
        borderColor: "black",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    BeautyService.getBeautyBySellerName(sellerName).then((response) => {
      setBeauty(response.data.length);
    });
  }, []);

  return (
    <div
      style={{
        alignItems: "center",
        width: "600px",
        height: "400px",
        marginTop: "70px",
      }}
    >
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BeautyBar;
