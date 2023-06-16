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
  const [toys, setToys] = useState("");
  const sellername = localStorage.getItem("name");

  const data = {
    labels: ["Number Of Toys"],
    datasets: [
      {
        data: [toys],
        backgroundColor: "violet",
        borderColor: "black",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
        height: "70%",
        width: "300px",
        position: "bottom",
        align: "center",
        marginTop: "20px",
      },
    },
  };
  useEffect(() => {
    ToysService.getToysBySellerName(sellername).then((response) => {
      setToys(response.data.length);
    });
  }, [sellername]);
  return (
    <div
      style={{
        alignItems: "center",
        width: "700px",
        height: "450px",
        marginTop: "100px",
      }}
    >
      <Bar data={data} options={options}></Bar>
      <h4>Toy</h4>
    </div>
  );
};

export default ToysBar;
