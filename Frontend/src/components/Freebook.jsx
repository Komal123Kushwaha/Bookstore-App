import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Import the Cards component
import axios from "axios"

function Freebook() {
  const[book,setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)

      } catch(error){
        console.log(error)
      }
    };
    getBook();
    
  },[])

    const filterData = book.filter((data) => data.category === "Free");

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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className="font-semibold text-xl pb-2">
                    Free Offered Courses
                </h1>
                <p>
                "Unlock your potential with our Free Courses!
                 Expand your knowledge and skills while diving into the world of books. 
                Start learning today—absolutely free!"
                </p>
            </div>

            <div>
                <Slider {...settings}>
                    {/* Map over filtered data and render Cards for each */}
                    {filterData.map((course, index) => (
                        <div key={index}>
                            <Cards course={course} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Freebook;
