"use client"
import { CaretDown, UserCircle } from '@phosphor-icons/react'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'

const Navbar: FC = () => {
  return (
    <>
      <div className='p-5 flex justify-between'>
        <Link href='/'>
          <h1 className="font-extrabold text-2xl">Vegio.co</h1>
        </Link>
        <Link href='https://forms.gle/a4gV3zzCnKkVMSBg8' className='bg-emerald-500 hover:bg-emerald-600 delay-300 ease-linear px-12 py-4 rounded-2xl text-white flex gap-2 items-center'>
          <PlusCircle weight='fill' size={32} color='#fff' />
          Add Place
        </Link>
      </div>
      <nav className="flex justify-end p-10">
        <div className="flex">
          <Link className="text-lg mx-2 border-transparent border rounded-2xl p-3 hover:border-black" href="/search">Find Places</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar