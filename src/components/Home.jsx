import { motion } from "framer-motion";
import React from "react";
import { buttonClcik, staggerFadeInOut } from "../animations";
import { Homep, green } from "../assets";
import { randomData } from "../utils/styles";
import { useNavigate } from "react-router-dom";




const Home = () => {

  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/Menu');
 };

  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="px-4 py-1 flex items-center justify-center gap-2 bg-green-100 rounded-full">
          <p className="text-lg font-semibold text-green-500">Food in a click</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={green}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider">
          Taste the difference at {" "}
          <span className="text-black-600">Inter</span> <span className="text-green-600">Cafe</span>
        </p>

        <p className="text-textColor text-lg">
          What's cooking !
        </p>
        <motion.button
          {...buttonClcik}
          className="bg-gradient-to-bl from-green-400 to-green-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
          onClick={handleOrderNowClick}
        >
          Order Now
        </motion.button>
        <p>Our servings range from a delicious Meal Of The Day, Salads, Wraps, GrabNGo to a refreshing Smoothie,
           Just click order now and taste the difference.
      </p>

      </div>

    
      <div className="py-2 flex-1 flex items-center justify-end relative">
      <img
 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-420 md:w-auto md:h-650"
 src={Homep}
 alt=""
/>


        <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, i) => (
              <motion.div
                key={i}
                {...staggerFadeInOut(i)}
                className=" w-32 h-36 md:h-auto  md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain "
                  alt=""
                />
                <p className="text-sm lg:text-xl font-semibold text-textColor">
                  {data.product_name.slice(0, 14)}
                </p>

                <p className="text-[12px] text-center  md:text-base text-lighttextGray font-semibold  capitalize">
                  {data.product_category}
                </p>

                <p className="text-sm  font-semibold text-headingColor">
                  <span className="text-xs text-green-600">R</span>{" "}
                  {data.product_price}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
