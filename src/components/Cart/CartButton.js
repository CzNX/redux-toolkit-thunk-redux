import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, toggle } from "../../redux/CartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(cartSelector);

  return (
    <button className={classes.button} onClick={() => dispatch(toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
