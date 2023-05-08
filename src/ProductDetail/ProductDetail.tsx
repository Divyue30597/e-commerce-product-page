import "./productdetail.css";
import incrementCounter from "../assets/images/icon-plus.svg";
import decrementCounter from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart-white.svg";
import { useContext } from "react";
import { ItemCountContext } from "../App";

export function ProductDetail() {
  const { itemCount, setItemCount } = useContext(ItemCountContext);

  function increaseCount() {
    setItemCount((itemCount: number) => itemCount + 1);
  }

  function decreaseCount() {
    if (itemCount > 0) {
      setItemCount((itemCount: number) => itemCount - 1);
    }
  }

  return (
    <section className="product-detail-comp">
      <p className="product-detail-header">Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="product-info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-price">
        <h2>$125.00</h2>
        <p>50%</p>
      </div>
      <h3>
        <s>$250.00</s>
      </h3>
      <div className="counter">
        <div className="change-counter">
          <button onClick={decreaseCount}>
            <picture>
              <img src={decrementCounter} alt="decrement Counter" />
            </picture>
          </button>
          <strong>{itemCount}</strong>
          <button onClick={increaseCount}>
            <picture>
              <img src={incrementCounter} alt="increment Counter" />
            </picture>
          </button>
        </div>
        <div className="add-to-cart">
          <button>
            <picture>
              <img src={cartIcon} alt="Cart icon" />
            </picture>
            <strong>Add to cart</strong>
          </button>
        </div>
      </div>
    </section>
  );
}
