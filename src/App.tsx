import "./App.css";
import { Nav } from "./Nav/Nav";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { ProductImage } from "./ProductImage/ProductImage";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
