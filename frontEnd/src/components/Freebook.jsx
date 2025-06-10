
import React, { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./Cards";


function Freebook() {
  // const filterData = list.filter((item) => item.category === "free");
  // console.log(filterData);
  const [book, setBook] = React.useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                const data = res.data;
                console.log(data);
                // Filter the data to only include free books
                const FreeBook = data.filter((item) => item.category === "free");
               
                setBook(FreeBook);
                console.log(FreeBook);

            }catch (error) {
                console.error("Error fetching paid books:", error);
            }
        };
        getBook(); // Don't forget to call the async function

    }, []); // ✅ Dependency array


  

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


    return (
      <>
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div>
            <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
              corporis nulla non suscipit, iure neque earum?
            </p>
            <br />
          </div>

          <div>
            <Slider {...settings} className="mt-4">
              {book.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </Slider>
          </div>


        </div>
      </>
    );
  }
export default Freebook;