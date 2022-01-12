import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img src={"/Assets/Images/space.webp"} alt="product name"></img>
      <div className="product__info">
        <p className="info__name"> </p>
        <p className="info__description">lorem ipsum</p>
        <p className="info__price">$499 </p>
        <Link to={`/product/${11}`} className="info__button">
          {" "}
          View{" "}
        </Link>
      </div>
    </div>
  );
};

export default Product;
