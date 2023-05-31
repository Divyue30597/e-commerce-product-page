import { useContext, useState } from "react";
import productImg1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import productImg1 from "../assets/images/image-product-1.jpg";
import productImg2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import productImg2 from "../assets/images/image-product-2.jpg";
import productImg3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import productImg3 from "../assets/images/image-product-3.jpg";
import productImg4Thumb from "../assets/images/image-product-4-thumbnail.jpg";
import productImg4 from "../assets/images/image-product-4.jpg";
import nextImage from "../assets/images/icon-next.svg";
import previousImage from "../assets/images/icon-previous.svg";
import "./productimage.css";
import { DialogContext } from "../App";

const productImage = [productImg1, productImg2, productImg3, productImg4];
const productImageThumb = [
  productImg1Thumb,
  productImg2Thumb,
  productImg3Thumb,
  productImg4Thumb,
];

function setActiveThumbnail(
  index: number,
  setActiveState: React.Dispatch<React.SetStateAction<number>>
) {
  setActiveState((activeState: number) => {
    activeState = index;
    return activeState;
  });

  const imageThumbnailChild = document.querySelectorAll(
    ".thumbnail-images picture img"
  );

  imageThumbnailChild.forEach((item, ind) => {
    if (ind === index) {
      item.className = "is-active";
    } else {
      item.className = "";
    }
  });
}

export function ProductImage() {
  const [activeState, setActiveState] = useState(0);
  const { dialogActive, setDialogActive } = useContext(DialogContext);

  function decreaseActiveState() {
    setActiveState((prevState) => {
      return prevState - 1;
    });
  }

  function increaceActiveState() {
    setActiveState((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <section className="product-image-section">
      <div className="product-images">
        {dialogActive && (
          <button
            className="decrement-button"
            onClick={() => {
              if (activeState > 0) decreaseActiveState();
            }}
          >
            <img src={previousImage} alt="left arrow icon" />
          </button>
        )}
        <picture>
          <img
            src={productImage[activeState]}
            alt="Product image"
            onClick={() => {
              setDialogActive(!dialogActive);
            }}
          />
        </picture>
        {dialogActive && (
          <button
            className="increment-button"
            onClick={() => {
              if (activeState < productImageThumb.length - 1)
                increaceActiveState();
            }}
          >
            <img src={nextImage} alt="right arrow icon" />
          </button>
        )}
      </div>
      <div className="thumbnail-images">
        {productImageThumb.map((thumbImg, index) => {
          return (
            <picture key={index}>
              <img
                src={thumbImg}
                alt={`product thumbnail ${index === 0 ? "is-active" : ""}`}
                onClick={() => {
                  setActiveThumbnail(index, setActiveState);
                }}
              />
            </picture>
          );
        })}
      </div>
    </section>
  );
}
