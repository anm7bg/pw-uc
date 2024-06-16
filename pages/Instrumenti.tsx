// rafce
import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { px } from 'framer-motion'
import MainMenu from '@/components/MainMenu'
import { Spotlight } from '@/components/ui/Spotlight'
import Header from '@/components/Header'
import GridGlobe from '@/components/ui/GridGlobe'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'

const Tools = () => {
  return (
    <article className='pb-5 pt-10'>
        <Header />
        <section className='globe-home'>
          <GridGlobe />
          <div className='flex justify-center mb-10 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    {/* <div className="logos-container">
                        <div className='wp'>
                            <Image src="/WordPress-500.png" alt="WordPress" width={500} height={500} />
                        </div>
                        <div className="react">
                            <span className="react-logo">
                                <span className="nucleo"></span>
                            </span>            
                        </div>
                    </div> */}
                    <TextGenerateEffect
                        className='text-center text-[1.3rem] md:text-2xl lg:text-1xl'
                        words='Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress на достъпни цени!'
                    />
                    <h2 className='sub-title text-[1.3rem] md:text-2xl lg:text-1xl'>Инструменти:</h2>
                    <div className='tools-content content text-center my-3'>
                        <p className='text-[1.3rem] md:text-2xl lg:text-1xl'>В процес на обновяване!!!</p>
                    </div>
                    {/* <MainMenu /> */}
                    {/* <p className="price text-center"><strong>Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress</strong> на достъпни цени!</p> */}
                </div>
            </div>
        </section>
        <Footer />
    </article>

  )
}

export default Tools