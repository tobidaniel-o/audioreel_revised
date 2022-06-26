import React from 'react'
import './Navigation.scss'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shared/desktop/icon-cart.svg'

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav className='nav-bar'>
        <Logo />
        <ul className='nav-bar-list'>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  )
}

export default Navigation