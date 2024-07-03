import React from 'react'

// import { navItems } from '@/data'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Link from 'next/link'
import Image from 'next/image'
// import { FaHome } from 'react-icons/fa'

const navItems = [
  { name: "Начало", link: "/"},
  { name: "Публикации", link: "/blog" },
  { name: "Инструменти", link: "/instrumenti" },
];

const Header = () => {

  return (
    <div className='header-area max-w-7xl mx-auto'>
        <Link className='main-logo show-dekstop' href="/"><Image className='top-logo' src="/logo.png" width={250} height={60} alt="powweb-logo" /></Link>
        <FloatingNav className='main-nav' navItems={navItems} />
        <Link className='main-logo show-mobile' href="/"><Image className='top-logo' src="/logo.png" width={250} height={60} alt="powweb-logo" /></Link>
        <h1 className='page-title uppercase mt-[4.5rem] tracking-widest text-[1.1rem] text-center text-blue-100'>
            SEO | Изработка и поддръжка на уеб сайтове и SPA!
        </h1 >
    </div>
  )
}

export default Header