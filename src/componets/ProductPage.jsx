import React, { useEffect, useState } from "react";
import { Datafile } from "../data/DataFile";
import { setFoods } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { addToCart } from "../redux/CartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
export const ProductPage = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.food);
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    dispatch(setFoods(Datafile));
  }, [dispatch]);

  const handleAddToCart = (e, food, index) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart({ ...food, quantity: 1 }));
    setAddedItems((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className=" px-8">
      <h1 className="text-3xl font-extrabold">Desserts</h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4  mt-4">
        {foods.map((food, index) => (
          <div key={index}>
            <div className="relative hover:border-red-700 mb-5 hover:border-2 cursor-pointer rounded-xl md:w-72">
              <img
                src={food.image.desktop}
                className="hidden md:block rounded-xl"
                alt={food.name}
              />
              <img
                src={food.image.mobile}
                className="block md:hidden rounded-xl"
                alt={food.name}
              />
              <div>
                {addedItems[index] ? (
                  <button className="flex items-center bg-red-700 w-44 justify-between md:px-6 px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2  border py-2 rounded-2xl -mb-6">
                    <span
                      onClick={() => dispatch(decreaseQuantity(food.name))}
                      className=" cursor-pointer  p-1 h-5 rounded-xl border "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="2"
                        fill="none"
                        viewBox="0 0 10 2"
                        className="mt-1"
                      >
                        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                      </svg>
                    </span>
                    <span className="text-white">{food.quantity}</span>

                    <span
                      onClick={() => dispatch(increaseQuantity(food.name))}
                      className="p-1  cursor-pointer rounded-xl border"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#fff"
                          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleAddToCart(e, food, index)}
                    className="flex items-center hover:border-red-700  w-44 md:px-6 px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border py-2 rounded-2xl -mb-6"
                  >
                    <MdOutlineAddShoppingCart className="text-red-700 mr-3" />
                    <span className="font-semibold text-sm"> Add to cart</span>
                  </button>
                )}
              </div>
            </div>
            <div className="mt-8">
              <span className="text-xs text-gray-400">{food.category}</span>
              <p className="font-semibold text-sm">{food.name}</p>
              <span className="text-red-700 text-sm">
                ${food.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
