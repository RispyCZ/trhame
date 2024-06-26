import { CaretDown, UserCircle } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const AccountDropDown = () => {
  return (
    <div className='bg-emerald-500 hover:bg-emerald-600 delay-300 ease-linear px-12 py-4 rounded-2xl text-white flex gap-2 items-center'>
      <UserCircle weight='fill' size={32} color='#fff' />
      <span className='font-bold'>
        Account
      </span>
      <CaretDown weight='fill' size={16} color='#fff' />
    </div>
  )
}

export default AccountDropDown