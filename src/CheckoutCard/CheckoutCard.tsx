import { useContext } from "react";
import "./checkoutcard.css";
import { ItemCountContext } from "../App";
import productImg1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import delIcon from "../assets/images/icon-delete.svg";

export function CheckoutCard() {
  const { itemCount, setItemCount } = useContext(ItemCountContext);

  return (
    <div className="checkout-card">
      <h3>Cart</h3>
      <hr />
      <div className="checkout-card-body">
        {itemCount === 0 ? (
          <p className="empty-cart-text">Your Cart is empty</p>
        ) : (
          <div className="checkout-card-horizontal">
            <div className="checkout-card-details">
              <img src={productImg1Thumb} alt="white color shoes" />
              <div className="checkout-card-info">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125 x {itemCount} <strong>${125 * itemCount}</strong>
                </p>
              </div>
              <button onClick={() => setItemCount(0)}>
                <img src={delIcon} alt="delete icon" />
              </button>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
