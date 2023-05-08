import { createContext, useContext, useState } from "react";
import "./App.css";
import { Nav } from "./Nav/Nav";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { ProductImage } from "./ProductImage/ProductImage";
import iconClose from "./assets/images/icon-close.svg";

export const DialogContext = createContext({});
export const ItemCountContext = createContext({});

function App() {
  const [dialogActive, setDialogActive] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <DialogContext.Provider value={{ dialogActive, setDialogActive }}>
        <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
          {dialogActive && <ImageDialog dialogActive={dialogActive} />}
          <Nav />
          <hr />
          <main className="container">
            <div className="product-image">
              <ProductImage />
            </div>
            <div className="product-detail">
              <ProductDetail />
            </div>
          </main>
        </ItemCountContext.Provider>
      </DialogContext.Provider>
    </>
  );
}

function ImageDialog({ dialogActive }: { dialogActive: boolean }) {
  const { setDialogActive } = useContext(DialogContext);

  return (
    <dialog open={dialogActive}>
      <div className="dialog-box">
        <picture>
          <img
            src={iconClose}
            alt="close icon"
            width={"24px"}
            onClick={() => setDialogActive(!dialogActive)}
          />
        </picture>
        <ProductImage />
      </div>
    </dialog>
  );
}

export default App;
