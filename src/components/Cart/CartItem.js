import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { cartSelector, decrement } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

import { increment } from "../../redux/CartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartitem = useSelector(cartSelector);
  const { title, quantity, total, price, id } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(decrement(id))}>-</button>
          <button onClick={() => dispatch(increment({ title, price, id }))}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
