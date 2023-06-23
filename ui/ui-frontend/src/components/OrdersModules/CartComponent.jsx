import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartService } from "../../Services/CartService";
import { PromoCodesService } from '../../Services/PromoCodesService';
import "../../StyleSheets/Cart.css";

const CartComponent = () => {

  const [cartItems, setCartItems] = useState([]);
  const [discountCodes, setDiscountCodes] = useState([])
  const [coupon, setCoupon] = useState("none")
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [quantity, setQuantity] = useState(1);

  const email = localStorage.getItem("email");
  const navigate = useNavigate("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CartService.getCartItemsByEmail(email);
        setCartItems(response.data);
        const res = await PromoCodesService.getAllPromoCodesByStatus("ACTIVE");
        console.log(res.data)
        setDiscountCodes(res.data);
      } catch (err) {
        if (err.response.status === 401) {
          console.log(err.response.data);
          navigate("/login");
          localStorage.clear();
        }
      }
    };
    fetchData();
  }, [email, navigate]);

  const checkoutFromCart = () => {
    navigate(`/paymentPage/${email}/${coupon}`);
  };

  const applyCoupon = async () => {
    const response = await PromoCodesService.getDiscountPrice(coupon)
    console.log(response.data);
    console.log(calculateTotalPrice().totalPrice * response.data)
    const distPrice = (calculateTotalPrice().totalPrice * response.data)
    setDiscountedPrice(distPrice.toFixed(2))

  }

  const deleteItemFromCarttt = async (cartId) => {
    await CartService.deleteItemFromCart(cartId)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/login");
        localStorage.clear();
      });
  };

  const quantityDec = async (cartId, qty) => {

    if (qty > 1) {
      let b = quantity - 1
      setQuantity(b);
      console.log(quantity)
      let a = qty - quantity
      CartService.updateQuantity(cartId, email, a).then((response) => {
        console.log(response.data);

      })
    }
    window.location.reload(false);
  };

  const quantityInc = async (cartId, qty) => {
    setQuantity(quantity + 1);
    let a = quantity + qty;
    CartService.updateQuantity(cartId, email, a).then((response => {
      console.log(response.data)
      console.log(quantity)
    }))
    window.location.reload(false);

  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let count = 0;
    let grandPrice = 0;

    for (const item of cartItems) {
      totalPrice += item.productPrice * item.qty;
      count += 1;
    }
    grandPrice = totalPrice

    if (coupon) {
      grandPrice = totalPrice - discountedPrice
    }
    return { totalPrice, count, grandPrice };
  };


  console.log(cartItems.length);
  if (cartItems.length === 0) {
    return (
      <div>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
          alt="Fail to load data" ></img>
        <div className="emptyCart">
          Your cart looks empty. Let’s fill it with some goodness!
        </div>
        <div className="contButton">
          <Link to={"/"}>
            <button className="btn btn-danger">Continue Shoping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.cartId} className="items-container">

            <div>
              <img src={item.logoImg} className="cart-product-img" alt="/"></img>
            </div>

            <div className="cart-item-details">
              <h5 className="product-name">{item.productName}</h5>

              <div className="d-flex">
                <div className={`size-selectors`}>
                  <span className="size-text"> Color: {item.color} </span>
                </div>
                <div className={`size-selectors`}>
                  <span className="size-text"> Size/Capacity: {item.size} </span>
                </div>
              </div>
            </div>

            <div className="product-qty-container">
              <div className="quantity" style={{ alignItems: "flex-start" }}>
                <div>
                  <button className="quantity-button" disabled={item.qty === 1} onClick={() => quantityDec(item.cartId, item.qty)} >{" "}-{" "} </button>
                  Quantity:{item.qty}
                  <button className="quantity-button" onClick={() => quantityInc(item.cartId, item.qty)}>{" "}+{" "} </button>
                </div>
              </div>
              <p className="product-price"> Price: ₹ {" "}
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{item.productPrice}/- </span>
              </p>
            </div>

            <div className="m-2 d-flex flex-column">
              <button className="btn btn-danger m-2" style={{ fontWeight: "600" }} onClick={() => deleteItemFromCarttt(item.cartId)}>  Remove  </button>
              <button className="btn btn-info m-2" style={{ fontWeight: "600" }}> Save later  </button>
            </div>

          </div>
        ))}
      </div>

      <div>
        <div className="price-container">
          <h3> Price Details</h3>
          <div>
            <h6> Available offers </h6>
            <div className='coupon-container'>
              <select onChange={(e) => setCoupon(e.target.value)}>
                <option>Choose Coupon</option>
                {discountCodes.map((item) =>
                  <option>{item.promoCode}</option>)}
              </select>
              <button className='btn btn-warning mb-2' onClick={applyCoupon}> Apply Coupon</button>
            </div>
          </div>
          <ul className="list-unstyled">
            <li className="total-price">{" "} Total Price: <span >{" "}₹ {calculateTotalPrice().totalPrice}/-{" "}</span> </li>
            <li className="total-price">{" "} Discount: <span style={{ color: "darkgreen" }}>{" "} ₹ {discountedPrice}/-{" "}</span> </li>
            <li className="total-price">{" "} Grand Price:  <span > {" "} ₹ {calculateTotalPrice().grandPrice}/-{" "}  </span></li>
          </ul>
          <p className="products-count-info"> Total Products: <span>{calculateTotalPrice().count}</span></p>

          <div className="btn-container">
            <button className="btn btn-success" onClick={() => checkoutFromCart()}> Place Order</button>
          </div>
        </div>

      </div>
    </div >
  );
};

export default CartComponent;
