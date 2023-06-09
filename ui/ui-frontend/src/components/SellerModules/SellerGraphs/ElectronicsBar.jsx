import React from "react";
import { useState, useEffect } from "react";
import {ElectronicsService} from "../../../Services/ElectronicsService";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ElectronicsBar = () => {
  const [mobiles, setMobiles] = useState();
  const [refrigerators, setRefrigerators] = useState();
  const [air_Conditioners, setAir_Conditioners] = useState();
  const [headphones, setHeadphones] = useState();
  const [laptops, setLaptops] = useState();
  const [tv, setTv] = useState();
  const [washing_Machines, setWashing_Machines] = useState();
  const [appliances, setAppliances] = useState();
  const sellername = localStorage.getItem("name");
  useEffect(() => {
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Mobiles"
    ).then((response) => {
      setMobiles(response.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Refrigerators"
    ).then((response1) => {
      setRefrigerators(response1.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Air_Conditioners"
    ).then((response2) => {
      setAir_Conditioners(response2.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Headphones"
    ).then((response3) => {
      setHeadphones(response3.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Laptops"
    ).then((response3) => {
      setLaptops(response3.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(sellername, "TV").then(
      (response3) => {
        setTv(response3.data.length);
      }
    );

    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Washing_Machines"
    ).then((response3) => {
      setWashing_Machines(response3.data.length);
    });
    ElectronicsService.getElectronicsBySellerNameAndType(
      sellername,
      "Appliances"
    ).then((response3) => {
      setAppliances(response3.data.length);
    });
  }, [sellername]);
  console.log(sellername)
  const data = {
    labels: [
      "Mobiles",
      "Refrigerators",
      "Air_Conditioners",
      "Headphones",
      "Laptops",
      "TV",
      "Washing_Machines",
      "Appliances",
    ],
    datasets: [
      {
        data: [
          mobiles,
          refrigerators,
          air_Conditioners,
          headphones,
          laptops,
          tv,
          washing_Machines,
          appliances,
        ],
        backgroundColor: [
          "green",
          "red",
          "blue",
          "yellow",
          "orange",
          "black",
          "pink",
          "grey",
        ],
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

export default ElectronicsBar;
