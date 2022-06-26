import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.scss'

const Header = ({headerName}) => {
  return (
    <div className='header-container'>
        <Navigation />
        <h1>{headerName}</h1>
    </div>
  )
}

export default Header