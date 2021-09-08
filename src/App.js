import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartSelector, showNoti } from "./redux/CartSlice";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const { items } = useSelector(cartSelector);
  const { notification } = useSelector(cartSelector);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNoti({
          status: "pending",
          title: "sending",
          msg: "sending card data",
        })
      );
      const res = await fetch(
        "https://practice-project-f8176-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error("send card data failed");
      }
      dispatch(
        showNoti({
          status: "success",
          title: "success",
          msg: " card  sent successfully!",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((err) => {
      dispatch(
        showNoti({
          status: "err",
          title: "err",
          msg: " card  sent failed!",
        })
      );
    });
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

export default App;
