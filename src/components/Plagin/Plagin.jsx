import React from 'react'
import './Plagin.css'
const Plagin = () => {
  return (
   <>
    <section className='plagin'>
        <div className="container">
            <div className="plagin__wrapp">
            <div className="plagin__wrapp-about">

              <h1>Custome & Plugin Development</h1>
              <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>

              <img className='arrow' src="./sysarrow.svg" alt="" />
                </div>
              <div className="plagin__wrapp-img">
                <img src="./plagin.svg" alt="" className='plagin-img' />
              </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Plagin
