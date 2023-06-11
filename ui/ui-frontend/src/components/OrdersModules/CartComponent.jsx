import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartService } from "../../Services/CartService";
import "../../StyleSheets/Cart.css";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const username = localStorage.getItem('username');
  const navigate = useNavigate("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CartService.getCartItemsByUser(username)
        setCartItems(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err.response.data)
        navigate("/login")
        localStorage.clear();
      }
    }
    fetchData();
  }, [username, navigate]);

  const checkoutFromCart = () => {
    navigate(`/paymentPage/${username}`)
  };

  const deleteItemFromCarttt = async (cartId) => {
    await CartService.deleteItemFromCart(cartId).then(() => {
      // alert("Item Deleted Successfully");
      window.location.reload(false);
    }).catch((err) => {
      console.log(err.response.data)
      navigate("/login")
      localStorage.clear();
    })
  };


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let count = 0;

    for (const item of cartItems) {
      totalPrice += item.productPrice * item.qty;
      count += 1;
    }

    return { totalPrice, count };
  };

  console.log(cartItems.length);
  if (cartItems.length === 0) {
    return (<div>
      <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="Fail to load data"></img>
      <div className="emptyCart">
        Your cart looks empty.
        Let’s fill it with some goodness!
      </div>
      <div className="contButton">
        <Link to={'/'} ><button className="btn btn-danger">Continue Shoping</button></Link>
      </div>
    </div>)
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.cartId} className="items-container">
            <div>
              <img src={item.logoImg} className="cart-product-img" alt="/"  ></img>
            </div>
            <div className="cart-item-details">
              <h5 className="product-name">{item.productName}</h5>
              <p className="product-description"> {item.productDescription}</p>
              <div className="d-flex">
                <div className={`size-selector`}>
                  <span className="size-text"> Color:{item.color} </span>
                </div>
                <div className={`size-selector`}>
                  <span className="size-text"> Size:{item.size} </span>
                </div>
              </div>
            </div>
            <div className="product-qty-container">
              <p className="product-price">  Quantity:{" "}
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {item.qty}
                </span>
              </p>
              <p className="product-price">
                Price: ₹{" "}
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {item.productPrice}/-
                </span>
              </p>
            </div>
            <div className="m-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteItemFromCarttt(item.cartId)}              >
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="price-container table">
          <h3> Price Details</h3>
          <p> Total Products: {calculateTotalPrice().count}</p>
          <p className="total-price">
            {" "}
            Total Price:
            <span style={{ fontStyle: "italic" }}>
              {" "}
              ₹ {calculateTotalPrice().totalPrice}/-{" "}
            </span>
          </p>

          <button className="checkout-btn" onClick={() => checkoutFromCart()}>Checkout</button>
        </div>
      </div>
    </div>
  );
}


export default CartComponent;
