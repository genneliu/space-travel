import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src={require(`../Assets/Images/space.webp`)}
            alt="product image"
          />
          <div className="left__info">
            <p className="left__name"> Product 1</p>
            <p> Price: $499</p>
            <p> Description: lorem ips</p>
          </div>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span> $499</span>
          </p>
          <p>
            Status: <span> In Stock </span>
          </p>
          <p>
            Qty:{" "}
            <select>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button"> Add to Cart </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
