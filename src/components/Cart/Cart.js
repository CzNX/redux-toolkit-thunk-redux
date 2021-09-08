import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, toggle } from "../../redux/CartSlice";

const Cart = (props) => {
  const { items, show } = useSelector(cartSelector);

  return (
    show && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((i) => (
            <CartItem
              key={i.itemId}
              item={{
                title: i.name,
                quantity: i.quantity,
                total: i.totalPrice,
                price: i.price,
                id: i.itemId,
              }}
            />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
