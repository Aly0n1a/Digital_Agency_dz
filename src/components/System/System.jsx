import React from 'react'
import './System.css'
const System = () => {
  return (
   <>
   <section className="system">
    <div className="container">
        <div className="system__wrap">
            <img className='system__img' src="./system.svg" alt="" />
            <div className="system__about">
            <h2>Branding & Design system</h2>
            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>

            <img className='arrow' src="./sysarrow.svg" alt="" />
            </div>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default System
