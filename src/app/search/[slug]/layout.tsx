import React, { FC, PropsWithChildren } from 'react'
import Categories from '../../../../categories.json'
import Link from 'next/link'

const SearchLayout: FC<PropsWithChildren & { params: { slug: string } }> = ({ children, params }) => {
  return (
    <>
      <div className='grid gap-4 grid-cols-[20%_1fr] min-h-svh'>
        <div className='shadow-xl rounded-2xl p-10'>
          <h3 className="text-lg font-bold text-center my-5">Kategorie</h3>
          <div className="flex flex-col justify-center items-center">
            {Categories.map((item, index) => {
              const { slug, title } = item
              return (
                <Link
                  key={index}
                  className={`${params.slug === slug ? 'border-b-black' : ''} text-xl my-2 border-b-transparent border-b-2 hover:border-b-black`}
                  href={slug}>
                  {title}
                </Link>
              )
            })}
          </div>
        </div>
        <div className='shadow-xl'>
          {children}
        </div>
      </div>
    </>
  )
}

export default SearchLayout