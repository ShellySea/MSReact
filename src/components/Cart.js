import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const { theme } = useContext(ThemeContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className={theme === "dark" ? "bg-slate-800 p-4" : "bg-white p-4"}>
      <h3
        className={
          theme === "dark"
            ? " text-zinc-100 text-2xl font-bold text-center "
            : "text-black text-2xl font-bold text-center "
        }
      >
        Cart
      </h3>
      <div className="text-center ">
        <button
          className={
            theme === "dark"
              ? "border border-zinc-100 m-2 p-2 bg-gray-800 text-zinc-100 rounded-lg"
              : "border border-black m-2 p-2 bg-green-100 rounded-lg"
          }
          onClick={() => handleClearCart()}
        >
          Clear cart
        </button>
      </div>
      <div className="flex ">
        <div
          className={
            theme === "dark"
              ? "w-8/12 m-auto text-zinc-100"
              : "w-8/12 m-auto text-black"
          }
        >
          {cartItems.length === 0 ? (
            <h3 className="text-xl text-center font-bold my-4">
              Your Cart is empty. Add Items to the cart!!!"
            </h3>
          ) : (
            <ItemList items={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
