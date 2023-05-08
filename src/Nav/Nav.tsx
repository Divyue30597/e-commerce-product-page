import "./nav.css";
import sneakersLogo from "../assets/images/logo.svg";
import profileImage from "../assets/images/image-avatar.png";
import cartIcon from "../assets/images/icon-cart.svg";
import { useContext } from "react";
import { ItemCountContext } from "../App";

export function Nav() {
  const { itemCount } = useContext(ItemCountContext);
  return (
    <nav className="navbar">
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
          <picture className="cart-logo">
            <a href="#">
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
    </nav>
  );
}
