import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { Nav } from "./Nav/Nav";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { ProductImage } from "./ProductImage/ProductImage";
import iconClose from "./assets/images/icon-close.svg";

export interface IdialogContext {
  dialogActive: boolean;
  setDialogActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IitemCount {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

export const DialogContext = createContext<IdialogContext>({
  dialogActive: false,
  setDialogActive: () => {},
});

export const ItemCountContext = createContext<IitemCount>({
  itemCount: 0,
  setItemCount: () => {},
});

function App() {
  const [dialogActive, setDialogActive] = useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(0);

  return (
    <DialogContext.Provider value={{ dialogActive, setDialogActive }}>
      <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
        {dialogActive && <ImageDialog />}
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
  );
}

function ImageDialog() {
  const { dialogActive, setDialogActive } = useContext(DialogContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (dialogActive) {
        dialog.show();
      }
    }

    return () => {
      if (dialog) dialog.close();
    };
  }, [dialogActive]);

  return (
    <dialog ref={dialogRef}>
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
