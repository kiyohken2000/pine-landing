import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>PINE pro</strong>, a super awesome
        <br />
        Messaging app that transcends the existing
        <br />
        crafted by <a href="https://twitter.com/votepurchase">@votepurchase</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
