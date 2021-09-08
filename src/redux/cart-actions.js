import { replaceCart, showNoti } from "./CartSlice";

// thunk code

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://practice-project-f8176-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      const data = response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        showNoti({
          status: "err",
          title: "err",
          msg: " card  fetch failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNoti({
        status: "pending",
        title: "sending",
        msg: "sending card data",
      })
    );
    const sendReq = async () => {
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
    };
    try {
      await sendReq();
      dispatch(
        showNoti({
          status: "success",
          title: "success",
          msg: " card  sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNoti({
          status: "err",
          title: "err",
          msg: " card  sent failed!",
        })
      );
    }
  };
};
// thunk end
