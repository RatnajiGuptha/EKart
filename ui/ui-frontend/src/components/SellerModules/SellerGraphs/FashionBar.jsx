import React from "react";
import "../../../StyleSheets/Bar.css";
import { FashionProductService } from "../../../Services/FashionProductService";
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

const FashionBar = () => {
  const [sportsWear, setSportsWear] = useState();
  const [kurthaSets, setKurthaSets] = useState();
  const [sarees, setSarees] = useState();
  const [shirts, setShirts] = useState();
  const [trousers, setTrousers] = useState();
  const [jeans, setJeans] = useState();
  const [tshirt, setTshirt] = useState();
  const [activeWear, setActiveWear] = useState();
  const [kidsWear, setKidsWear] = useState();
  const [jumpSuits, setJumpSuits] = useState();
  const [ethnicWear, setEthnicWear] = useState();
  const [suits, setSuits] = useState();

  const sellername = localStorage.getItem("name");
  useEffect(() => {
    FashionProductService.getBySellerNameAndType(sellername, "SportsWear").then(
      (response) => {
        console.log(response.data);
        setSportsWear(response.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "KurthaSets").then(
      (response1) => {
        console.log(response1.data);
        setKurthaSets(response1.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Sarees").then(
      (response2) => {
        console.log(response2.data);
        setSarees(response2.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Shirts").then(
      (response3) => {
        console.log(response3.data);
        setShirts(response3.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Trousers").then(
      (response4) => {
        console.log(response4.data);
        setTrousers(response4.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Jeans").then(
      (response5) => {
        console.log(response5.data);
        setJeans(response5.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Tshirt").then(
      (response6) => {
        console.log(response6.data);
        setTshirt(response6.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "ActiveWear").then(
      (response7) => {
        console.log(response7.data);
        setActiveWear(response7.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "KidsWear").then(
      (response8) => {
        console.log(response8.data);
        setKidsWear(response8.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "JumpSuits").then(
      (response9) => {
        console.log(response9.data);
        setJumpSuits(response9.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "EthnicWear").then(
      (response10) => {
        console.log(response10.data);
        setEthnicWear(response10.data.length);
      }
    );
    FashionProductService.getBySellerNameAndType(sellername, "Suits").then(
      (response11) => {
        console.log(response11.data);
        setSuits(response11.data.length);
      }
    );
  }, [sellername]);

  const data = {
    labels: [
      "SportsWear",
      "KurthaSets",
      "Sarees",
      "Shirts",
      "Trousers",
      "Jeans",
      "Tshirt",
      "ActiveWear",
      "KidsWear",
      "JumpSuits",
      "EthnicWear",
      "Suits",
    ],
    datasets: [
      {
        data: [
          sportsWear,
          kurthaSets,
          sarees,
          shirts,
          trousers,
          jeans,
          tshirt,
          activeWear,
          kidsWear,
          jumpSuits,
          ethnicWear,
          suits,
        ],
        backgroundColor: [
          "chartreuse",
          "yellow",
          "red",
          "blue",
          "pink",
          "grey",
          "orange",
          "navy",
          "maroon",
          "purple",
          "olive",
          "green",
        ],
        borderColor: "black",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "relative",
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
        marginTop: "120px",
      }}
    >
      <Bar data={data} options={options}></Bar>
      <h4>Fashion</h4>
    </div>
  );
};

export default FashionBar;
