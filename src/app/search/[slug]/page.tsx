import React, { FC } from 'react'
import Link from 'next/link'
import { fetchQuery } from 'convex/nextjs'
import { api } from '../../../../convex/_generated/api'
import { Globe, MapPinArea, MapPin } from '@phosphor-icons/react/dist/ssr'

const SearchLayout: FC<{ params: { slug: string } }> = async ({ params }) => {
  const categories = await fetchQuery(api.categories.get)
  const currentCategory = categories.find((item) => item.slug === params.slug)
  if (!currentCategory) return
  const places = await fetchQuery(api.places.get, { category: currentCategory.slug })
  return (
    <div className='grid gap-4 grid-cols-[20%_1fr] min-h-svh'>
      <div className='shadow-xl rounded-2xl p-10'>
        {/* Sidebar */}
        <h3 className="text-lg font-bold text-center my-5">Categories</h3>
        <div className="flex flex-col justify-center items-center">
          {categories.map((item, index) => {
            const { slug, title } = item
            return (
              <Link
                key={index}
                className={`${slug === params.slug ? 'border-b-black' : 'border-b-transparent'} text-xl my-2 border-b-2 hover:border-b-black`}
                href={slug}>
                {title}
              </Link>
            )
          })}
        </div>
      </div>

      <div className='shadow-xl'>
        {/* Section Top */}
        <div className="text-center p-12">
          <h1 className='font-black text-4xl'>{currentCategory?.title}</h1>
          <h2 className='text-lg'>{currentCategory?.subtitle}</h2>
        </div>
        <hr className='border-2 border-gray-300' />
        <div className='flex flex-col p-12'>
          {places.length == 0 ? <p className='font-semibold'>No places in category was found.</p> : <></>}
          {places.map((place, index) => {
            const { location, name, description, googleLinkUrl, websiteUrl } = place
            return (
              <div key={index} className='flex flex-col gap-4 shadow-lg p-5'>
                <h1 className='text-4xl font-black'>{name}</h1>
                <p className='text-sm'>{description}</p>
                <p className='font-bold flex items-center'><MapPinArea weight='fill' size={32}/> {location}</p>
                <div className='flex py-5 gap-4'>
                  <Link className='bg-emerald-500 hover:bg-emerald-600 delay-300 ease-linear px-12 py-4 rounded-2xl text-white flex gap-2 items-center' href={googleLinkUrl}><MapPin weight='fill' size={32} /> Google Maps Link</Link>
                  <Link className='bg-emerald-500 hover:bg-emerald-600 delay-300 ease-linear px-12 py-4 rounded-2xl text-white flex gap-2 items-center' href={websiteUrl}><Globe weight='fill' size={32} /> Website</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchLayout