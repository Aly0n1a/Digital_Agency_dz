import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    
    <section className='hero'>
        <div className="container">
            <div className="hero__wrapp">
            <div className="hero__wrapp-about">

              <h1>Building digital products, brands & experience</h1>
              <p>Digital Agency is Your Online Team Mangement Tool That Easy And Prompt</p>

              <button>Contact Us</button>
                </div>
              <div className="hero__wrapp-img">
                <img src="./hero.svg" alt="" className='hero-img' />
              </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Hero