// rafce
import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import Footer from '../components/blocks/Footer'
import Link from 'next/link'
import Image from 'next/image'
import MainMenu from '@/components/ui/MainMenu'
import HomeContent from '@/components/ui/HomeContent'

const HomeUC = () => {
  return (
    <div className='pb-5 pt-10'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
            h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
        </div>

        <Link className='logo-link' href="/"><Image className='top-logo' src="/logo.png" width={250} height={60} alt="powweb-logo" /></Link>
        <h1 className='page-title uppercase tracking-widest text-xs text-center text-blue-100'>
            SEO | Изработка и поддръжка на уеб сайтове и SPA!
        </h1 >
        
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-10 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                {/* React Logo  */}
                <div className="logos-container">
                    <div className='wp'>
                        <Image src="/WordPress-500.png" width={500} height={500} alt="WordPress" />
                    </div>
                    <div className="react">
                        <span className="react-logo">
                            <span className="nucleo"></span>
                        </span>            
                    </div>
                </div>
                {/* ------------------------------ */}
                <HomeContent />
                <MainMenu />
                {/* <p className='price'>Качество и коректност на добра цена.</p> */}
                <p className="price text-center"><strong>Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress</strong> на достъпни цени!</p>
            </div>
        </div>
        <Footer />
    </div>

  )
}

export default HomeUC

