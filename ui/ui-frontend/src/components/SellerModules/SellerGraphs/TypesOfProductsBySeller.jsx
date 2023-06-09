import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { useRef } from "react";

import {AccessoriesService} from "../../../Services/AccessoriesService";
import {BeautyService} from "../../../Services/BeautyService";
import {ToysService} from "../../../Services/ToysService";
import {FashionProductService} from "../../../Services/FashionProductService";
import {FootwearService} from "../../../Services/FootwearService";
import {ElectronicsService} from "../../../Services/ElectronicsService";
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
    AccessoriesService.getAccessoriesProductsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Accessories");
          setLength(response.data.length);
        }
        setAccessoriesItems(response.data.length);
      }
    );
    FashionProductService.getFashionProductsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Fashion");
          setLength(response.data.length);
        }
        setFashionItems(response.data.length);
      }
    );
    FootwearService.fetchBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Footwear");
        setLength(response.data.length);
      }
      setFootWearItems(response.data.length);
    });
    ElectronicsService.getElectronicsBySellerName(sellername).then(
      (response) => {
        if (length < response.data.length) {
          setSelectedLabel("Electronics");
          setLength(response.data.length);
        }
        setElectronicsItems(response.data.length);
      }
    );
    ToysService.getToysBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Toys");
        setLength(response.data.length);
      }
      setToyItems(response.data.length);
    });
    BeautyService.getBeautyBySellerName(sellername).then((response) => {
      if (length < response.data.length) {
        setSelectedLabel("Beauty");
        setLength(response.data.length);
      }
      setBeautyItems(response.data.length);
    });
  }, [sellername]);

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
      // const datasetIndexnum = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      // console.log(`dataset: ${datasetIndexnum} and Data :${index}`);
      // window.open(
      //   "http://localhost:3000" + data.datasets[datasetIndexnum].link[index]
      // );
      // setLink(data.datasets[datasetIndexnum].link[index]);

      // setLabel(data.labels[index]);
      setSelectedLabel(data.labels[index]);
    }
  };

  return (
    <div className="d-flex">
      <div
        style={{
          padding: "1%",
          marginTop: "70px",
          width: "35%",
        }}
      >
        <Pie
          data={data}
          options={options}
          onClick={onClick}
          ref={chartRef}
        ></Pie>
      </div>
      <div style={{ width: "80%", marginTop: "5%" }}>
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
