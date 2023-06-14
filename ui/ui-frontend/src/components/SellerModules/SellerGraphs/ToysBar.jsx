import React from "react";
import { useState, useEffect } from "react";
import { ToysService } from "../../../Services/ToysService";
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
  }, [sellername]);

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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        marginTop: "20px",
      },
    },
  };
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
      <h4>Toy</h4>
    </div>
  );
};

export default ToysBar;
