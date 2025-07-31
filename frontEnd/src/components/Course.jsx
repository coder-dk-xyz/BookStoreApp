import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useEffect } from "react";

function Course() {
  /*
    console.log(list);
    const filterData = list.filter((item) => item.category === "paid");
    console.log(filterData);
    */

  const [book, setBook] = React.useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data;
        console.log(data);
        // Filter the data to only include paid books
        const paidBooks = data.filter((item) => item.category === "paid");

        setBook(paidBooks);
        console.log(paidBooks);
      } catch (error) {
        console.error("Error! paid books not fetched :", error);
      }
    };
    getBook(); // Don't forget to call the async function
  }, []); //  Dependency array

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mb-10 mt-30 items-center justify-center text-center">
          <h1 className="font-semibold  pb-4 text-4xl ">Paid Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum? quas quidem nesciunt
            debitis dolore non aspernatur praesentium assumenda sint quibusdam,
            perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis
            quisquam reiciendis sunt quis sed magnam consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          <br />
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
