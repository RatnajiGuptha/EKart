import React from "react";
import { useState, useEffect } from "react";
import {ToysService} from "../../../Services/ToysService";
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

const ToysBar = () => {
  const [toys, setToys] = useState();
  const sellername = localStorage.getItem("name");
  useEffect(() => {
    ToysService.getToysBySellerName(sellername).then((response) => {
      setToys(response.data.length);
    });
  }, []);
  const data = {
    labels: ["Number Of Toys"],
    datasets: [
      {
        label: "Toys",
        data: [toys],
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
  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default ToysBar;
