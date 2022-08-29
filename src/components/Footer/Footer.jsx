import React from "react";

import classes from './Footer.module.css'

import whiteLogo from '../../asset/whiteLogo.svg'

import facebook from '../../asset/icon-facebook.svg'

import twitter from '../../asset/icon-twitter.svg'

import pinterest from '../../asset/icon-pinterest.svg'

import instagram from '../../asset/icon-instagram.svg'

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <img className={classes.logo} alt="" src={whiteLogo} />
         <section>
            <div>
               <h5>Features</h5>
               <p>Link Shortening</p>
               <p>Branded Links</p>
               <p>Analytics</p>
            </div>
            <div>
               <h5>Resources</h5>
               <p>Blog</p>
               <p>Developer</p>
               <p>Support</p>
            </div>
            <div>
               <h5>Company</h5>
               <p>About</p>
               <p>Our Team</p>
               <p>careers</p>
               <p>Contact</p>
            </div>
         </section>
         <div className={classes['icons-div']}>
          <img alt="" src={facebook} />
          <img alt="" src={twitter} />
          <img alt="" src={pinterest} />
          <img alt="" src={instagram} />
         </div>
      </footer>
   )
}

export default Footer