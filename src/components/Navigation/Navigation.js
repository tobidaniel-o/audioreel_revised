import React from 'react'
import './Navigation.scss'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shared/desktop/icon-cart.svg'

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav className='nav-bar'>
        <span className='logo'>
          <a href='/'>audioreel</a>
        </span>
        <ul className='nav-bar-list'>
          <li className='nav-link'><a href='/'>Home</a></li>
          <li className='nav-link'><a href='/'>Headphones</a></li>
          <li className='nav-link'><a href='/'>Speakers</a></li>
          <li className='nav-link'><a href='/'>Earphones</a></li>
          <li className='nav-link'><a href='/'>Sign in</a></li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  )
}

export default Navigation