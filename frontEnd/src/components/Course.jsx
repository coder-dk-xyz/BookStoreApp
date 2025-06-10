import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useEffect } from 'react';







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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

                <div className="mb-10 mt-30 justify-center text-center">
                    <h1 className="font-semibold  pb-4 text-4xl ">Paid Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                        veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
                        non suscipit, iure neque earum?
                    </p>
                    <button type="button"  className="bg-yellow-800 text-white my-3 text-xl cursor-pointer px-3 py-1 rounded-md hover:bg-amber-950 duration-400" >
                        <a href="/">back</a>
                    </button>


                    <br />
                </div>

                <Slider {...settings}>
                    {book.map((item) => {
                        return <Cards key={item.id} item={item} />;
                    })}
                </Slider>
            </div >
        </>

    );
}

export default Course;
