import React, { Fragment } from 'react'
import './NewProductDetails.scss'

const NewProductDetails = () => {
  return (
    <Fragment>
        <div className='wrapper'>
            <div className='hdProdDetailsContainer'>
                <div>
                    <span className='newProduct'>new product</span>
                    <div className='productName'>
                        <span>xx99 mark ii</span>
                        <br />
                        <span>headphones</span>
                    </div>
                </div>
                <p className='productIntro'>
                    Experience natural, lifelike audio and exceptional <br/>build quality made for the passionate music <br/>enthusiast. 
                </p>
            </div>
        </div>
    </Fragment>
  )
}

export default NewProductDetails