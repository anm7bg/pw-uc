// rafce
import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { px } from 'framer-motion'
import MainMenu from '@/components/MainMenu'
import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import MagicButton from '@/components/MagicButton'
import ShimmerButton from '@/components/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import Grid  from '@/components/Grid'

const TestComponents = () => {
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
                        <Image src="/WordPress-500.png" alt="WordPress" width={500} height={500} />
                    </div>
                    <div className="react">
                        <span className="react-logo">
                            <span className="nucleo"></span>
                        </span>            
                    </div>
                </div>
                {/* ------------------------------ */}
                <h2 className='sub-title'>Тест:</h2>
                <div className='tools-content content text-center my-3'>
                <Grid />
                <FloatingNav navItems={navItems} />
                <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Test'
                />
                    <Link 
                        href="#"
                    >
                    <MagicButton
                        title="Show my work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                    </Link>
                    <Link 
                        href="#"
                    >
                        <ShimmerButton
                            title="Show my work2"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </Link>
                </div>
                <MainMenu />
                <p className="price text-center"><strong>Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress</strong> на достъпни цени!</p>
            </div>
        </div>
        <Footer />
    </div>

  )
}

export default TestComponents