import "./nav.css";
import sneakersLogo from "../assets/images/logo.svg";
import profileImage from "../assets/images/image-avatar.png";
import cartIcon from "../assets/images/icon-cart.svg";
import { useContext, useState } from "react";
import {
  DialogContext,
  IdialogContext,
  IitemCount,
  ItemCountContext,
} from "../App";
import { CheckoutCard } from "../CheckoutCard/CheckoutCard";

export function Nav() {
  const { itemCount } = useContext<IitemCount>(ItemCountContext);
  const { dialogActive } = useContext<IdialogContext>(DialogContext);
  const [cardActive, setCardActive] = useState<boolean>(false);

  function displayCard() {
    setCardActive((prevState) => !prevState);
  }

  return (
    <nav className={dialogActive ? " navbar dialog-box-active" : "navbar"}>
      <ul>
        <li>
          <picture className="company-logo">
            <a href="#">
              <img src={sneakersLogo} alt="logo" />
            </a>
          </picture>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <picture
            className={
              dialogActive ? "cart-logo dialog-box-active" : "cart-logo"
            }
          >
            <a href="#" onClick={displayCard}>
              <div className="item-tag">{itemCount}</div>
              <img src={cartIcon} alt="Cart" />
            </a>
          </picture>
        </li>
        <li>
          <picture className="profile-picture">
            <a href="#">
              <img src={profileImage} alt="Profile" />
            </a>
          </picture>
        </li>
      </ul>
      {cardActive && <CheckoutCard />}
    </nav>
  );
}
