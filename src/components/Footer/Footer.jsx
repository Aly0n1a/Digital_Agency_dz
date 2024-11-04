import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <>
   <section className="footer">
        <div className="footer__wrapper">
    <div className="container">
        <div className="footer__wrap">
            <div className="footer__text">
                <h4>Digital Agency</h4>
                <p className='text'>Building digital products, 
                brands & experience</p>
            </div>
            <div className="footer__text">
                <h4>Resources</h4>
                <p>Guides</p>
                <p>Blog</p>
                <p>Cuistomer Stories</p>
                <p>Glossery</p>
            </div>
            <div className="footer__text">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Partners</p>
                <p>Contact Us</p>
            </div>
            <div className="footer__text">
                <h4>Social Media</h4>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            </div>
            <p className='text2'>© Matheus. Todos os direitos reservados</p>

        </div>
    </div>
   </section>
   </>
  )
}

export default Footer
