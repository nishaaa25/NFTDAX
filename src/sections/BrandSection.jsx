import React from 'react';
import { brands } from '../constants';

const BrandSection = () => {
  return (
    <section className='flex justify-center items-center max-container w-full'>
      <div className='flex justify-center items-center gap-24 flex-wrap padding bg-grayDark '>
        {brands.map((brand)=>(
          <div key={brand.imgUrl} className='flex justify-between gap-4 items-center'>
            <img src={brand.imgUrl} width={50}/>
            <span className='text-xl font-bold'>{brand.name}</span>
          </div>
        ))}
      </div>
    </section>

  )
}

export default BrandSection
