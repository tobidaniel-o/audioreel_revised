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
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Headphones</a></li>
          <li><a href='/'>Speakers</a></li>
          <li><a href='/'>Earphones</a></li>
          <li><a href='/'>Sign in</a></li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  )
}

export default Navigation