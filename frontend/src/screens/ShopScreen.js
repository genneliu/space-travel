import "./ShopScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//components
import Product from "../components/Product";

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const ShopScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="shopscreen">
      <h2 className="shopscreen__title"> The Trip of a Lifetime </h2>
      <div className="shopscreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopScreen;
