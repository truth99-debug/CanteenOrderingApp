import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const Breakfast = products?.filter(
    (item) => item.product_category === "Breakfast"
  );
  const Salads = products?.filter((item) => item.product_category === "Salads");
  const GrabAndGo = products?.filter((item) => item.product_category === "GrabAndGo");
  const Wraps = products?.filter((item) => item.product_category === "Wraps");
  const Smoothies = products?.filter(
    (item) => item.product_category === "Smoothies"
  );
  const MOTD = products?.filter((item) => item.product_category === "MOTD");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Salads",
                  "GrabAndGo",
                  "Wraps",
                  "Smoothies",
                  "MOTD",
                  "Breakfast",
                  "Drinks",
                ],
                datasets: [
                  {
                    label: "Category wise Count",
                    backgroundColor: "#f87979",
                    data: [
                      Salads?.length,
                      Wraps?.length,
                      GrabAndGo?.length,
                      Smoothies?.length,
                      MOTD?.length,
                      Breakfast?.length,
                      drinks?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#51FF00",
                      "#00B6FF",
                      "#008BFF",
                      "#FFD100",
                      "#FF00FB",
                    ],
                    data: [40, 20, 80, 34, 54],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
