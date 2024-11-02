import React from 'react';
import { data } from '../data/carousel';

function CarouselBar() {
  return (
    <div className="carousel overflow-x-auto snap-x snap-mandatory scroll-smooth carousel-center w-[100%] h-[250px] gap-5 sm:h-[300px] 2xl:h-[400px]">
      {data.map(({ id, img }) => (
        <div key={id} className="carousel-item snap-center flex-shrink-0">
          <img
            src={img}
            alt="Carousel item"
            className="w-[425ox] sm:w-[500px] 2xl:w-[800px]"
          />
        </div>
      ))}
    </div>
  );
}

export default CarouselBar;
