import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/ProductContext.js";
import Product from "../components/Product.js";
import Hero from "../components/Hero.js";
import { useState } from "react";
import "./style.css"
const Home = () => {
  const { products } = useContext(productContext);

  const [filter, setFilter] = useState([]);

  // select All product
  const AllProduct = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing" ||
      product.category === "electronics"
    );
  });

  // filter product
  const filterProduct = (category) => {
    const filterProducts = products.filter((product) => {
      return product.category === category;
    });
    setFilter(filterProducts);
  };

  useEffect(() => {
    if (!filter.length) {
      setFilter(AllProduct);
    }
  });

  return (
    <div>
      <Hero />
      <section className="p-8 md:p-20">
        <div className="">
          <div className="btnMenu flex overflow-x-auto   md:justify-center md:items-center mb-8"  >
            <div
              onClick={() => setFilter(AllProduct)}
              className=" px-8 border py-1 cursor-pointer hover:text-red-800 transition-all"
            >
              All
            </div>
            <div
              onClick={() => filterProduct("women's clothing")}
              className="mx-5  px-7 border py-1 cursor-pointer hover:text-red-800 transition-all"
            >
              Women
            </div>
            <div
              onClick={() => filterProduct("men's clothing")}
              className=" px-6 border py-1 cursor-pointer hover:text-red-800 transition-all "
            >
              Men
            </div>
            <div
              onClick={() => filterProduct("electronics")}
              className="ml-5  px-5 border py-1 cursor-pointer hover:text-red-800 transition-all "
            >
              Electronics
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         xl:grid-cols-4 gap-[25px] max-auto md:max-none md:mx-0"
          >
            {filter.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;