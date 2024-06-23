// rafce

"use client";


import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import HomeContent from '@/components/ui/HomeContent'
import MainMenu from '@/components/MainMenu'
import MagicButton from '@/components/MagicButton'
import { FaHome, FaLocationArrow } from 'react-icons/fa'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import GridGlobe from '@/components/ui/GridGlobe';
import Header from '@/components/Header';



const HomeUC = () => {
  return (
    <article className='pb-5 pt-10'>
        <Header />
        <section className='globe-home'>
          <GridGlobe />
          <div className='flex justify-center mb-10 z-10'>
            {/* <div className='flex justify-center relative my-10 z-10'> */}
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                {/* React Logo  */}
                {/* <div className="logos-container">
                    <div className='wp'>
                        <Image src="/WordPress-500.png" width={500} height={500} alt="WordPress" />
                    </div>
                    <div className="react">
                        <span className="react-logo">
                            <span className="nucleo"></span>
                        </span>            
                    </div>
                </div> */}
                {/* ------------------------------ */}
                <div>
                {/* <Link 
                        href="#"
                    >
                    <MagicButton
                        title="Show my work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                    </Link>*/}
                </div>
                <TextGenerateEffect
                    className='home-text-generate-effect text-center text-[1.5rem]'
                    // className='text-center text-[1rem] md:text-2xl lg:text-1xl'
                    words='Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress на достъпни цени!'
                />
                <HomeContent />
                {/* <MainMenu /> */}
                {/* <p className='price'>Качество и коректност на добра цена.</p> */}
                {/* <p className="price text-center text-[1.2rem] md:text-1xl lg:text-1xl"><strong>
                    Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress</strong> на достъпни цени!</p> */}
            </div>
        </div>
        </section>
        <Footer />
    </article>

  )
}

export default HomeUC

