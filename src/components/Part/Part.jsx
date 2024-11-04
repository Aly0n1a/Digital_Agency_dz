import React from 'react'
import './Part.css'
const Part = () => {
  return (
   <>
   <section className='part'>
        <div className="container">
            <div className="part__wrapp">
              <div className="part__wrapp-img">
                <img src="./part.svg" alt="" className='part-img' />
              </div>
            <div className="part__wrapp-about">

              <h1>Be a part of the next big thing</h1>
              <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>

              <button>Contact Us</button>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Part
