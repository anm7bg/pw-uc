// rafce
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const HomeUC = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
            h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                {/* React Logo  */}
                <div className="logos-container">
                    <div className='wp'>
                        <img src="WordPress-500.png" alt="WordPress" />
                    </div>
                    <div className="react">
                        <span className="react-logo">
                            <span className="nucleo"></span>
                        </span>            
                    </div>
                </div>
                {/* ------------------------------ */}
                <h1 className='uppercase tracking-widest text-xs text-center text-blue-100'>
                    <img className='top-logo' src="/logo.png" alt="powweb-logo" />
                    SEO | Изработка и поддръжка на уеб сайтове и SPA!
                </h1 >
                <p className='price'>Качество и коректност на добра цена.</p>
                <p className='tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Copyright © 2014 - 2024 powwebs@gmail.com
                </p >
            </div>
        </div>
    </div>

  )
}

export default HomeUC

