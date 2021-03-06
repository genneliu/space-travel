import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

//components
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";

//actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

//stripe promise
const stripePromise = loadStripe(
  "pk_test_51KKSURG1UsWcmbVpNmllMlbysaIF04bx38rCbLEpCkyXYx1yFaEE7BXyMg1CvxpCk1EP7iNH42pnuCBVb2YlptKM00vZNmUF2x"
);

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => item.price * item.qty + price, 0)
      .toFixed(2);
  };

  //stripe
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <div className="cart__container">
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2> Shopping Cart </h2>
          {cartItems.length === 0 ? (
            <div>
              {" "}
              Your cart is empty <Link to="/shop">Continue Shopping</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p> Subtotal ({getCartCount()}) Items </p>
            <p> ${getCartSubTotal()} </p>
          </div>
          <div>
            <Link to={CheckoutForm}>
              {" "}
              <button>Proceed To Checkout</button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartScreen;
