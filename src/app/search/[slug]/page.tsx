import { Button } from '@/components/base/button'
import React, { FC } from 'react'
import Categories from '../../../../categories.json'

const SearchCategory: FC<{ params: { slug: string } }> = ({ params }) => {

  const category = Categories.find((item) => item.slug === params.slug)

  return (
    <div className='p-10'>
      {/* Section Top */}
      <div className="text-center p-12">
        <h1 className='font-black text-4xl'>{category?.title}</h1>
        <h2 className='text-lg'>{category?.subtitle}</h2>
      </div>
      <hr className='border-2 border-gray-300' />

      <div className='flex flex-col p-12'>
        <div className='my-4 shadow-xl p-5'>
          <h3 className='font-bold text-4xl'>Farma1</h3>
          <p className='text-xl my-4'>Lorem Ipsum</p>
          <div className='bg-green-500 text-white font-extrabold max-w-xs text-center my-6 rounded-full p-5'>
            <p>🕔 Otevřeno: 10:00-17:00</p>
          </div>
          <Button>Více informací</Button>
        </div>
        <div className='my-4 shadow-xl p-5'>
          <h3 className='font-bold text-4xl'>Farma2</h3>
          <p className='text-xl my-4'>Lorem Ipsum</p>
          <div className='bg-green-500 text-white font-extrabold max-w-xs text-center my-6 rounded-full p-5'>
            <p>🕔 Otevřeno: 10:00-17:00</p>
          </div>
          <Button>Více informací</Button>
        </div>
        <div className='my-4 shadow-xl p-5'>
          <h3 className='font-bold text-4xl'>Farma3</h3>
          <p className='text-xl my-4'>Lorem Ipsum</p>
          <div className='flex items-center gap-4'>
            <div className='bg-green-500 border-2 border-black text-white font-extrabold max-w-xs text-center my-6 rounded-full p-5'>
              <p>🕔 Otevřeno: 10:00-17:00</p>
            </div>
            <div className='bg-blue-500 border-2 border-black text-white font-extrabold max-w-xs text-center my-6 rounded-full p-5'>
              <p>Cena: od 100Kč/KG</p>
            </div>
          </div>
          <Button>Více informací</Button>
        </div>
      </div>
    </div>
  )
}

export default SearchCategory