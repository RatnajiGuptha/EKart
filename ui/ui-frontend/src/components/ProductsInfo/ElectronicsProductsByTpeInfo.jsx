import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ElectronicsService } from "../../Services/ElectronicsService";
import { CartService } from "../../Services/CartService";
import { WishListService } from "../../Services/WishListService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../StyleSheets/Home.css";


const ElectronicsProductsByTpeInfo = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const { type, electronicsId } = useParams();
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
    ElectronicsService.getElectronicsByTypeWithId(type, electronicsId).then(
      (response) => {
        console.log(response);
        setProductInfo(response.data);
        setImage(response.data.productImg1);
        setCategory("Electronics");
      }
    )

  }, [type, electronicsId]);

  const handleCardItems = async () => {

    if (localStorage.getItem('token')) {
      const datad = await CartService.getProductCategoryAndProductId(category, electronicsId).then()
        .catch((err) => {
          if (err.response.status === 401) {
            console.log(err.response.data)
            navigate("/login")
            localStorage.clear();
          }
        });

      console.log(datad.data);
      if (datad.data.cartId == null) {
        const cart = {
          productId: productsInfo.electronicsId,
          email: email,
          brandName: productsInfo.brandName,
          productName: productsInfo.productName,
          logoImg: productsInfo.logoImg,
          productPrice: productsInfo.productPrice,
          size: productsInfo.capacity,
          color: productsInfo.color,
          qty: quantity,
          productCategories: category,
          type: productsInfo.type,
          sellerName: productsInfo.sellerName
        };
        console.log(cart.productCategories);
        if (productsInfo.qty > quantity) {
          await CartService.addItemsToCart(cart).then(() => {
            toast.success("Item added successfully", { theme: "dark" });
          }).catch((err) => {
            if (err.response.status === 401) {
              console.log(err.response.data)
              navigate("/login")
              localStorage.clear();
            }
          });
        } else {
          toast.warning(" products Left", { theme: "dark" });
        }
      } else {
        const qty = datad.data.qty + quantity;
        await CartService.updateQuantity(datad.data.cartId, email, qty).then(() => {
          toast.success("Cart contains " + qty + " " + datad.data.productName, { theme: "dark" });
        }).catch((err) => {
          if (err.response.status === 401) {
            console.log(err.response.data)
            navigate("/login")
            localStorage.clear();
          }
        });
      }
    }
    else {
      navigate("/login");
    }
  };

  const Inventory = "electronics";
  const InventoryType = `electronicsBy/${type}`;

  const handleWishListItem = async () => {

    if (localStorage.getItem('token')) {
      const datad = await WishListService.getItemByTypeAndId(Inventory, electronicsId).then()
        .catch((err) => {
          if (err.response.status === 401) {
            console.log(err.response.data)
            navigate("/login")
            localStorage.clear();
          }
        });

      console.log(datad.data);


      if (datad.data.wishlistId == null) {
        const wishList = {
          email: email,
          inventory: Inventory,
          inventoryType: InventoryType,
          prodId: productsInfo.electronicsId,
          logoImg: productsInfo.logoImg,
          type: productsInfo.type,
          productName: productsInfo.productName,
          price: productsInfo.productPrice,
        };

        await WishListService.addItemsToWishList(wishList).then((response) => {
          console.log(response.data);
          toast.success("Item added successfully", { theme: "dark" });
        }).catch((err) => {
          if (err.response.status === 401) {
            console.log(err.response.data)
            navigate("/login")
            localStorage.clear();
          }
        });
      } else {
        toast.error("Item is already in Wishlist", { theme: "dark" });
      }
    }

  }

  return (
    <div className="product-info-container">
      <div className="product-image-container">

        <img className="card-images"
          alt="/" onClick={() => handleClick(productsInfo.productImg1)}
          src={productsInfo.productImg1} />

        <img className="card-images"
          alt="/" onClick={() => handleClick(productsInfo.productImg2)}
          src={productsInfo.productImg2} />

        <img className="card-images"
          alt="/" onClick={() => handleClick(productsInfo.productImg3)}
          src={productsInfo.productImg3} />

        <img className="card-images"
          alt="/" onClick={() => handleClick(productsInfo.productImg4)}
          src={productsInfo.productImg4} />

        <img className="card-images"
          alt="/" onClick={() => handleClick(productsInfo.productImg5)}
          src={productsInfo.productImg5} />

      </div>

      <div className="product-main-image-container">
        <img className="product-main-image" src={image} alt="/"></img>
      </div>

      <div className="product-deatails-container">
        <h1>{productsInfo.brandName}</h1>
        <p className="suitable-for"> {productsInfo.type}</p><h2 className="product-name" style={{ textAlign: "left" }}>{productsInfo.productName}</h2>
        <p className="product-description" style={{ textAlign: "left" }}>{productsInfo.productDescription}</p>

        <div className="d-flex">
          <div className={`size-selector`}>
            <span className="size-text"> Color:{productsInfo.color} </span>
          </div>
          <div className={`size-selector`}>
            <span className="size-text">    {" "}    Capacity:{productsInfo.capacity}{" "}
            </span>
          </div>

        </div>
        <p className="product-price">{" "}Price : ₹ {productsInfo.productPrice}/-</p>
        <h5 className="seller-name">Seller : {productsInfo.sellerName}</h5>

        <div className="quantity">
          <div>
            <button className="quantity-button" disabled={quantity === 1} onClick={quantityDec}  >    {" "}    - {" "}  </button>
            {quantity}
            <button className="quantity-button" onClick={quantityInc}>    {" "}    +{" "}  </button>
          </div>
        </div>

        <div>
          <button className="btn btn-info m-2" onClick={handleWishListItem}>  Add to wishList</button>
          <button className="btn btn-warning m-2" onClick={handleCardItems}>  Add to cart</button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ElectronicsProductsByTpeInfo;
