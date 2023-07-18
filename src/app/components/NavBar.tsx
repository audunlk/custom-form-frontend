import React from 'react'
import { redirect } from 'next/navigation'

export default function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-16 px-20">
    <div className="flex items-center">
      <div className="text-2xl font-bold">Formify</div>
    </div>
    <div className="flex items-center">
      <div className="mr-4 text-base font-medium hover:underline cursor-pointer"
      onClick={() => redirect('/auth/signin')}
      >Sign In</div>
      <div className="text-base font-medium hover:underline cursor-pointer"
        onClick={() => redirect('/auth/signup')}
      >Sign Up</div>
    </div>
  </div>
  )
}
