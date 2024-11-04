import React from 'react'
import './Cards.css'
const Cards = () => {
  return (
   <>
   <section className="Cards">
    <div className="container">
        <div className="cards__wrap">
            <p className='title'>TESTIMONIALS</p>
            <h2 className='about'>Read What Other have to Say</h2>
            <div className="cards">
                <div className="card">
                    <img src="./card1.svg" alt="" />
                    <h4>Andrew Rathore</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className="card">
                    <img src="./card2.svg" alt="" />
                    <h4>Vera Duncan</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className="card">
                    <img src="./card3.svg" alt="" />
                    <h4>Mark Smith</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Cards
