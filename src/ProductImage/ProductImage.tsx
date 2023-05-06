import { useState } from "react";
import productImg1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import productImg1 from "../assets/images/image-product-1.jpg";
import productImg2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import productImg2 from "../assets/images/image-product-2.jpg";
import productImg3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import productImg3 from "../assets/images/image-product-3.jpg";
import productImg4Thumb from "../assets/images/image-product-4-thumbnail.jpg";
import productImg4 from "../assets/images/image-product-4.jpg";
import "./productimage.css";

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
  setActiveState((activeState: number) => (activeState = index));
  const imageThumbnailChild = document.querySelectorAll(
    `.thumbnail-images picture img`
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
  const [dialogActive, setDialogActive] = useState(false);

  return (
    <>
      {dialogActive && <ImageDialog dialogActive={dialogActive} />}
      <section className="product-image-section">
        <div className="product-images">
          <picture>
            <img
              src={productImage[activeState]}
              alt="Product image"
              onClick={() => {
                setDialogActive(!dialogActive);
              }}
            />
          </picture>
        </div>
        <div className="thumbnail-images">
          {productImageThumb.map((thumbImg, index) => {
            return (
              <picture key={index}>
                <img
                  src={thumbImg}
                  alt={`product thumbnail ${index}`}
                  onClick={() => setActiveThumbnail(index, setActiveState)}
                />
              </picture>
            );
          })}
        </div>
      </section>
    </>
  );
}

export function ImageDialog({ dialogActive }: { dialogActive: boolean }) {
  return (
    <>

      <dialog open={dialogActive}>
        <ProductImage />
      </dialog>
    </>
  );
}
