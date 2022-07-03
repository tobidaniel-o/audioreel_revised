import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation'
import NewProductDetails from '../NewProductDetails/NewProductDetails'
import './Home.scss'



const Home = () => {
  return (
    <Fragment>
        <header>
            <Navigation />
            <NewProductDetails />
        </header>
    </Fragment>
  )
}

export default Home