import { React, useEffect, useState } from "react";
import { OrderService } from "../../Services/OrderService";
import { Link, useNavigate } from "react-router-dom";
import "../../StyleSheets/MyOrders.css";

const MyOrdersComponent = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate("");
  useEffect(() => {
    OrderService.getAllOrderByUser(localStorage.getItem("email"))
      .then((response) => {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
          navigate("/login");
          localStorage.clear();
        }
      });
  }, [navigate]);

  return (
    <div className="order-container">
      {order.map((item) => {
        return (
          <Link
            key={item.purchaseOrderId}
            to={`/invoice/${item.purchaseOrderId}`}
            className="link"
          >
            <div className="orders-info">
              <div className="products-info table">
                {item.productName.map((item1) => {
                  return <li className="products-name">{item1}</li>;
                })}
              </div>

              <div className="table">
                <p className="order-price">₹ {item.price}/-</p>
              </div>
              <div className="table">
                <p className="order-date">{item.orderDate}</p>
              </div>
              <div className="table">
                {item.paymentStatus === "PAYMENT_COMPLETED" ? (
                  <div className="payment-status">
                    <span className="greendot"></span>
                    <p className="payment">{item.paymentStatus}</p>
                  </div>
                ) : (
                  <div className="payment-status">
                    <span className="reddot"></span>
                    <p className="payment">{item.paymentStatus}</p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MyOrdersComponent;
