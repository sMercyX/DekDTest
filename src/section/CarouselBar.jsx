import React from 'react';
import { data } from '../data/carousel';

function CarouselBar() {
  return (
    <div className=" flex   items-center h-[250px] gap-5 sm:h-[300px] 2xl:h-[400px] "> 
      <ul className='flex overflow-x-auto gap-6 snap-x snap-mandatory'>
      {data.map(({ id, img }) => (
        <li key={id} className='shrink-0 snap-center'>
          <img src={img} alt="" 
          className="w-[425px] sm:w-[500px] 2xl:w-[800px] h-full"
          />
        </li>
      ))}
      </ul>
      
    </div>
  );
}

export default CarouselBar;
