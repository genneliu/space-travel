import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//components
import CartItem from "../components/CartItem";

//actions
import { addToCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2> Shopping Cart </h2>
        {cartItems.length === 0 ? (
          <div>
            {" "}
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem item={item} qtyChangeHandler={qtyChangeHandler} />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p> Subtotal (0) Items </p>
          <p> $499 </p>
        </div>
        <div>
          <button> Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
