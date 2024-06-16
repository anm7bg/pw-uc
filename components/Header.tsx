import React from 'react'

// import { navItems } from '@/data'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Link from 'next/link'
import Image from 'next/image'
// import { FaHome } from 'react-icons/fa'

const navItems = [
  { name: "Начало", link: "/"},
  { name: "Инструменти", link: "/instrumenti" },
  { name: "Публикации", link: "#" },
];

const Header = () => {

  return (
    <div className='header-area max-w-7xl mx-auto'>
        <Link className='main-logo show-dekstop' href="/"><Image className='top-logo' src="/logo.png" width={250} height={60} alt="powweb-logo" /></Link>
        <FloatingNav className='main-nav' navItems={navItems} />
        <Link className='main-logo show-mobile' href="/"><Image className='top-logo' src="/logo.png" width={250} height={60} alt="powweb-logo" /></Link>
        <h1 className='page-title uppercase mt-10 tracking-widest text-xs text-center text-blue-100'>
            SEO | Изработка и поддръжка на уеб сайтове и SPA!
        </h1 >
    </div>
  )
}

export default Header