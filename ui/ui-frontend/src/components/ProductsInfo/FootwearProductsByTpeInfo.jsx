import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FootwearService from "../../Services/FootwearService";
import CartService from "../../Services/CartService";
import "../../StyleSheets/Home.css";

const FootwearProductsByTypeInfo = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { type, footWearId } = useParams();
  const [productsInfo, setProductInfo] = useState({ id: null });
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const handleClick = (imgSrc) => {
    setImage(imgSrc);
  };

  const quantityDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const quantityInc = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
    FootwearService.getFootwearByTypeAndId(type, footWearId).then(
      (response) => {
        console.log(response);
        setProductInfo(response.data);
        setImage(response.data.productImg1);
        setCategory("FootWear");
      }
    );
  }, [type, footWearId]);

  const handleCardItems = async () => {
    const datad = await CartService.getProductCategoryAndProductId(
      category,
      footWearId
    );

    console.log(datad.data);

    if (isLogin) {
      if (datad.data.cartId == null) {
        const cart = {
          productId: productsInfo.footWearId,
          userName: username,
          brandName: productsInfo.brandName,
          productName: productsInfo.productName,
          logoImg: productsInfo.logoImg,
          productPrice: productsInfo.productPrice,
          size: productsInfo.size,
          color: productsInfo.color,
          qty: quantity,
          productCategories: category,
          type: productsInfo.type,
          sellerName: productsInfo.sellerName
        };
        console.log(cart.productCategories);
        if (productsInfo.qty > quantity) {
          await CartService.addItemsToCart(cart).then((response) => {
            alert("Item added successfully");
          });
        } else {
          alert(`${productsInfo.qty}`, " products Left");
        }
      } else {
        const qty = datad.data.qty + quantity;
        await CartService.updateQuantity(datad.data.cartId, username, qty);
        alert("Cart contains " + qty + " " + datad.data.productName);
      }
    }
    else {
      navigate("/login");

    }
  };
  return (
    <div className="product-info-container">
      <div className="product-image-container">
        <img
          className="card-images"
          alt="/"
          onClick={() => handleClick(productsInfo.productImg1)}
          src={productsInfo.productImg1}
        />

        <img
          className="card-images"
          alt="/"
          onClick={() => handleClick(productsInfo.productImg2)}
          src={productsInfo.productImg2}
        />

        <img
          className="card-images"
          alt="/"
          onClick={() => handleClick(productsInfo.productImg3)}
          src={productsInfo.productImg3}
        />

        <img
          className="card-images"
          alt="/"
          onClick={() => handleClick(productsInfo.productImg4)}
          src={productsInfo.productImg4}
        />

        <img
          className="card-images"
          alt="/"
          onClick={() => handleClick(productsInfo.productImg5)}
          src={productsInfo.productImg5}
        />
      </div>
      <div className="product-main-image-container">
        <img className="product-main-image" src={image} alt="/"></img>
      </div>
      <div className="product-deatails-container">
        <h1>{productsInfo.brandName}</h1>
        <p className="suitable-for">
          {" "}
          {productsInfo.suitablefor} / {productsInfo.type}
        </p>
        <h2 className="product-name">{productsInfo.productName}</h2>
        <p className="product-description" style={{ textAlign: "left" }}>
          {productsInfo.productDescription}
        </p>
        <div className="d-flex">
          <div className={`size-selector`}>
            <span className="size-text"> Color:{productsInfo.color} </span>
          </div>
          <div className={`size-selector`}>
            <span className="size-text"> Size:{productsInfo.size} </span>
          </div>
        </div>
        <p className="product-price">
          {" "}
          Price : ₹ {productsInfo.productPrice}/-
        </p>
        <h5 className="seller-name">Seller : {productsInfo.sellerName}</h5>
        <div className="quantity">
          <div>
            <button
              className="quantity-button"
              disabled={quantity === 1}
              onClick={quantityDec}
            >
              {" "}
              -{" "}
            </button>
            {quantity}
            <button className="quantity-button" onClick={quantityInc}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-warning" onClick={handleCardItems}>
            Add to cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FootwearProductsByTypeInfo;
