import React from "react";
import { useState, useEffect } from "react";
import { FootwearService } from "../../../Services/FootwearService";
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

const FootWearBar = () => {
  const [shoes, setShoes] = useState();
  const [formalShoes, setFormalShoes] = useState();
  const [heels, setHeels] = useState();
  const [flats, setFlats] = useState();
  const sellername = localStorage.getItem("name");

  useEffect(() => {
    FootwearService.getFootWearBySellerNameAndType(sellername, "Shoes").then(
      (response) => {
        setShoes(response.data.length);
      }
    );
    FootwearService.getFootWearBySellerNameAndType(
      sellername,
      "FormalShoes"
    ).then((response1) => {
      setFormalShoes(response1.data.length);
    });
    FootwearService.getFootWearBySellerNameAndType(sellername, "Heels").then(
      (response2) => {
        setHeels(response2.data.length);
      }
    );
    FootwearService.getFootWearBySellerNameAndType(sellername, "Flats").then(
      (response3) => {
        setFlats(response3.data.length);
      }
    );
  }, [sellername]);

  const data = {
    labels: ["Shoes", "FormalShoes", "Heels", "Flats"],
    datasets: [
      {
        data: [shoes, formalShoes, heels, flats],
        backgroundColor: ["red", "green", "yellow", "blue"],
        borderColor: "black",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
        height: "70%",
        width: "100%",
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
        width: "700px",
        height: "400px",
        marginTop: "100px",
      }}
    >
      <Bar data={data} options={options}></Bar>
      <h4>FootWear</h4>
    </div>
  );
};

export default FootWearBar;
