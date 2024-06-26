import React, { FC } from 'react'
import Link from 'next/link'
import { api } from '../../../convex/_generated/api'
import { fetchQuery } from 'convex/nextjs'

const SearchPage: FC = async () => {
  const categories = await fetchQuery(api.categories.get)
  if (!categories) return
  return (
    <div className='grid grid-cols-3 gap-4 items-center justify-center my-10 px-10'>
      {categories.map((item, index) => {
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
  )
}

export default SearchPage