import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setProducts(response.data);
    }, []);
  });

  return (
    <div>
      {products.map((item) => {
        return (
          <div classsName="card">
            <div className="sub-card">
              <img className="image_link" src={item.image} alt="/"></img>
              <div className="sub1-card">
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
                {/* <p>{item.description}</p> */}
                <div>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
