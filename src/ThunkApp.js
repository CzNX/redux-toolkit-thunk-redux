import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartData } from "./redux/cart-actions";
import { cartSelector, showNoti } from "./redux/CartSlice";

let isInitial = true;
function ThunkApp() {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const { items } = useSelector(cartSelector);
  const { notification } = useSelector(cartSelector);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [items, dispatch]);
  return (
    <>
      {notification && <p>{notification.title}</p>}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default ThunkApp;
