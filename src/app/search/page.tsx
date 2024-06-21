import React from 'react'
import Categories from '../../../categories.json'
import Link from 'next/link'
const SearchPage = () => {

  return (
    <div className='p-20'>
      {/* Section Top */}
      <div className="text-center p-12">
        <h1 className='font-black text-4xl'>Co si chcete dnes natrhat?</h1>
      </div>
      <hr className='border-2 border-gray-300' />

      <div className='grid grid-cols-3 gap-4 items-center justify-center my-10'>
        {Categories.map((item, index) => {
          return (
            <div className='shadow-xl p-10 rounded-xl text-center' key={index}>
              <Link
                href={`/search/${item.slug}`}
                className='text-2xl font-bold border-b-2 border-b-transparent hover:border-b-black'>
                {item.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage