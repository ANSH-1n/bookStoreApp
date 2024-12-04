import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/List.json'
import Cards from './Cards.jsx';
function Freebook() {
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

  const filterData = list.filter((data) => data.category === "Free");
  console.log("hujj", filterData)
  return (
    <>
      <div className='max-w-screen-2xl  conatiner mx-auto md:px-20 px-4 '>
        <div>
          <h1 className='font-semibold text-xl pb-2'>
            Free offered courses
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab ducimus, odio illo necessitatibus ipsum, impedit dolores rerum accusamus ad nulla consequatur iusto animi modi et tempora laudantium omnis a!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item ={item} key = {item.id} />
            ))}
     
          </Slider>

        </div>
      </div>

    </>

  )
}

export default Freebook




