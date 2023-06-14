import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { useRef } from "react";
import "../../../StyleSheets/Bar.css";
import { AccessoriesService } from "../../../Services/AccessoriesService";
import { BeautyService } from "../../../Services/BeautyService";
import { ToysService } from "../../../Services/ToysService";
import { FashionProductService } from "../../../Services/FashionProductService";
import { FootwearService } from "../../../Services/FootwearService";
import { ElectronicsService } from "../../../Services/ElectronicsService";
import FashionBar from "./FashionBar";
import FootWearBar from "./FootWearBar";
import ElectronicsBar from "./ElectronicsBar";
import AccessoriesBar from "./AccessoriesBar";
import ToysBar from "./ToysBar";
import BeautyBar from "./BeautyBar";

ChartJS.register(ArcElement, Tooltip, Legend);
const TypesOfProductsBySeller = () => {
  const [fashionItems, setFashionItems] = useState(0);
  const [beautyItems, setBeautyItems] = useState(0);
  const [toyItems, setToyItems] = useState(0);
  const [accessoriesItems, setAccessoriesItems] = useState(0);
  const [footWearItems, setFootWearItems] = useState(0);
  const [electronicsItems, setElectronicsItems] = useState(0);
  const sellername = localStorage.getItem("name");

  const [length, setLength] = useState(0);

  const [selectedLabel, setSelectedLabel] = useState("");

  useEffect(() => {
    FashionProductService.getFashionProductsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Fashion");
          setLength(response.data.length);
        }
        console.log(response.data.length);
        setFashionItems(response.data.length);
      }
    );
    AccessoriesService.getAccessoriesProductsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Accessories");
          setLength(response.data.length);
        }
        console.log(response.data.length);
        setAccessoriesItems(response.data.length);
      }
    );

    FootwearService.fetchBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Footwear");
        setLength(response.data.length);
      }
      console.log(response.data.length);
      setFootWearItems(response.data.length);
    });
    ElectronicsService.getElectronicsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Electronics");
          setLength(response.data.length);
        }
        console.log(response.data.length);
        setElectronicsItems(response.data.length);
      }
    );
    ToysService.getToysBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Toys");
        setLength(response.data.length);
      }
      console.log(response.data.length);
      setToyItems(response.data.length);
    });
    BeautyService.getBeautyBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Beauty");
        setLength(response.data.length);
      }
      console.log(response.data.length);
      setBeautyItems(response.data.length);
    });
  }, [sellername, length]);

  const data = {
    labels: [
      "Fashion",
      "Beauty",
      "Accessories",
      "Footwear",
      "Toys",
      "Electronics",
    ],
    datasets: [
      {
        data: [
          fashionItems,
          beautyItems,
          accessoriesItems,
          footWearItems,
          toyItems,
          electronicsItems,
        ],
        backgroundColor: ["orange", "navy", "pink", "red", "yellow", "blue"],
        link: [
          "/Fashionnn",
          "/Beautyy",
          "/Accessoriesss",
          "/Footwearr",
          "/Toyss",
          "/Electronicss",
        ],
      },
      {},
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

  console.log(selectedLabel);
  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      setSelectedLabel(data.labels[index]);
    }
  };

  return (
    <div className="d-flex">
      <div>
        <Pie
          style={{
            alignItems: "center",
            width: "500px",
            height: "400px",
            marginTop: "70px",
          }}
          data={data}
          options={options}
          onClick={onClick}
          ref={chartRef}
        ></Pie>
      </div>
      <div>
        {selectedLabel === "Fashion" && <FashionBar />}
        {selectedLabel === "Footwear" && <FootWearBar />}
        {selectedLabel === "Electronics" && <ElectronicsBar />}
        {selectedLabel === "Toys" && <ToysBar />}
        {selectedLabel === "Beauty" && <BeautyBar />}
        {selectedLabel === "Accessories" && <AccessoriesBar />}
      </div>
    </div>
  );
};

export default TypesOfProductsBySeller;
