import { beeflasagna, burger2, croisaants, wrapss, stewandrice, smoothies, spaghetti } from "../assets";



export const isActiveStyles =
  " text-2xl text-green-700 font-semibold hover:text-green-700 px-4 py-2 duration-100 transition-all ease-in-out";

export const isNotActiveStyles =
  " text-xl text-textColor hover:text-green-700 duration-100 px-4 py-2 transition-all ease-in-out";

export const statuses = [
  { id: 1, title: "Salads", category: "Salads" },
  { id: 2, title: "Wraps", category: "Wraps" },
  { id: 3, title: "GrabNGo", category: "GrabandGo" },
  { id: 4, title: "Smoothies", category: "smoothies" },
  { id: 5, title: "MOTD", category: "mod" },
  { id: 6, title: "Breakfast", category: "Breakfast" },
  { id: 7, title: "Drinks", category: "drinks" },
];

export const randomData = [
  {
    id: 1,
    imageURL:wrapss,
    product_name: "Wrap",
    product_category: "wraps",
    product_price: "23.00",
  },
  {
    id: 2,
    imageURL: smoothies,
    product_name: "Berry Blush",
    product_category: "Smoothies",
    product_price: "18.00",
  },
  {
    id: 3,
    imageURL: beeflasagna,
    product_name: "Beef Lasagna",
    product_category: "Meal Of The Day",
    product_price: "30.00",
  },
  {
    id: 4,
    imageURL: stewandrice,
    product_name: "Stew and Rice",
    product_category: "Meal Of The Day",
    product_price: "22.0",
  },
  {
    id: 5,
    imageURL:croisaants,
    product_name: "Croissant",
    product_category: "Breakfast",
    product_price: "30.0",
  },
  {
    id: 6,
    imageURL:burger2,
    product_name: "Burger",
    product_category: "Meal Of The Day",
    product_price: "30.0",
  },
];
