import React from "react";
import { AccessoriesService } from "../../../Services/AccessoriesService";
import { useState, useEffect } from "react";
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
const AccessoriesBar = () => {
  const [jewellery, setJewellery] = useState();
  const [handBags, setHandBags] = useState();
  const [watches, setWatches] = useState();
  const [sunGlasses, setSunglasses] = useState();
  const sellername = localStorage.getItem("name");
  useEffect(() => {
    AccessoriesService.getAccessoriesBySellerNameAndType(
      sellername,
      "Jewellery"
    ).then((response) => {
      setJewellery(response.data.length);
    });
    AccessoriesService.getAccessoriesBySellerNameAndType(
      sellername,
      "HandBags"
    ).then((response) => {
      setHandBags(response.data.length);
    });
    AccessoriesService.getAccessoriesBySellerNameAndType(
      sellername,
      "Watches"
    ).then((response) => {
      setWatches(response.data.length);
    });
    AccessoriesService.getAccessoriesBySellerNameAndType(
      sellername,
      "Sunglasses"
    ).then((response) => {
      setSunglasses(response.data.length);
    });
  });
  const data = {
    labels: ["Jewellery", "HandBags", "Watches", "Sunglasses"],
    datasets: [
      {
        data: [jewellery, handBags, watches, sunGlasses],
        backgroundColor: ["green", "blue", "red", "yellow"],
        borderColor: "black",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "relative",
        align: "center",
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
    </div>
  );
};

export default AccessoriesBar;
