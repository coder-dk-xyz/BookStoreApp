import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-8 mb-2 my-3 flex-1/2 p-3">
        <div className="card md:w-86   bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className="md:w-86" src={item.image} alt="" />
          </figure>
          <div className="flex justify-center">
            {item.id}
          </div>
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