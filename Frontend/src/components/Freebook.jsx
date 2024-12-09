import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Import the Cards component
import list from "../../public/list.json";

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");

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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ratione molestias eos laborum vel sequi adipisci quod minus reprehenderit facilis!
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
