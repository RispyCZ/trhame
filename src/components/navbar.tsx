"use client"
import { CaretDown, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'

const Navbar: FC = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null)
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => setLocation(pos.coords))
    }
  }, [])
  return (
    <div>
      <div className='p-5 flex justify-between'>
        <Link href='/'>
          <h1 className="font-extrabold text-2xl">Trhame.cz</h1>
        </Link>
        <div className='bg-emerald-500 hover:bg-emerald-600 delay-300 ease-linear px-12 py-4 rounded-2xl text-white flex gap-2 items-center'>
          <UserCircle weight='fill' size={32} color='#fff' />
          <span className='font-bold'>
            Účet
          </span>
          <CaretDown weight='fill' size={16} color='#fff' />
        </div>
      </div>
      <nav className="flex justify-end p-10">
   
        <div className="flex">
          <Link className="text-lg mx-2 border-transparent border rounded-2xl p-3 hover:border-black" href="/search">Hledej místa</Link>
          <Link className="text-lg mx-2 border-transparent border rounded-2xl p-3 hover:border-black" href="#">O nás</Link>
          <Link className="text-lg mx-2 border-transparent border rounded-2xl p-3 hover:border-black" href="#">Kontakt</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar