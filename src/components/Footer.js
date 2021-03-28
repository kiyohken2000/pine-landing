import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/votepurchase" className="icon fa-twitter" target='_blank'>
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="mailto:pinepro.staff@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; votepurchase</li>
        <li>
          Built with: <a href="https://reactnative.dev" target='_blank'>React Native</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
