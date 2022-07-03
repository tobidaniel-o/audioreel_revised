import React, { Fragment } from 'react'
import MainSection from '../MainSection/MainSection'
import Navigation from '../Navigation/Navigation'
import NewProductDetails from '../NewProductDetails/NewProductDetails'
import ThumbnailSection from '../ThumbnailSection/ThumbnailSection'
import './Home.scss'



const Home = () => {
  return (
    <Fragment>
        <header>
            <Navigation />
            <NewProductDetails />
        </header>
        <ThumbnailSection />
        <MainSection />
    </Fragment>
  )
}

export default Home