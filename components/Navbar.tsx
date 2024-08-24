import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const navIcon =[
  {src: '/assests/icons/search.svg', alt:'search'}
  {src: '/assests/icons/black-herat.svg', alt:'heart'}
  {src: '/assests/icons/user.svg', alt:'user'}
  
]
const Navbar = () => {
  return (
   <header className='w-full'>
    <nav className='nav'>
      <Link href= "/" className=" flex items-center gap-1 ">
      <Image src="/assets/icons/logo.svg"
      width={27}
      height={27}
      alt='logo' />

      <p className='nav-logo'>
        Scrapy
      </p>
      </Link>
      
      
      </nav> 

   </header>
  )
}

export default Navbar