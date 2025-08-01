import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className=" md:w-76 mt-2 mb-2 my-3  p-2 flex">
        <div className="card  p-1.5   bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
          <figure className="w-full h-67">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
