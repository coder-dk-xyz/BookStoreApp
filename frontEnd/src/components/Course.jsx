// import React from 'react'
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// import list from "../../public/list.json";
// import Navbar from './Navbar';
// import Footer from './Footer';

import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Course() {
    console.log(list);
    const filterData = list.filter((item) => item.category === "paid");

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

                <div className="mb-10 mt-30">
                    <h1 className="font-semibold  pb-4 text-2xl ">Paid Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                        veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
                        non suscipit, iure neque earum?
                    </p>
                    <br />
                </div>

                <Slider {...settings}>
                    {filterData.map((item) => {
                        return <Cards key={item.id} item={item} />;
                    })}
                </Slider>
                </div >
            </>
        
  );
}

export default Course;
