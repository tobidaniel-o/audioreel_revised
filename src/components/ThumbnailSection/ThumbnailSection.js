import React from 'react'
import { ReactComponent as RightArrow } from '../../assets/shared/desktop/icon-arrow-right.svg'
import './ThumbnailSection.scss'

const ThumbnailSection = () => {
  return (
    <div className='wrapper'>
        <ul className='category-container'>
            <li className='category-item-details'>
                <div className='category-img'>
                    <img className='image-item' src={require('../../assets/shared/desktop/image-category-thumbnail-headphones.png')} alt='a black headphone'/>
                </div>
                <div className='category-item-name'>
                    <span>Headphones</span>
                    <div className='shop-item'>
                        <span>shop</span>
                        <a href='/'><RightArrow /></a>
                    </div>
                </div>
            </li>

            <li className='category-item-details'>
                <div className='category-img'>
                    <img className='image-item' src={require('../../assets/shared/desktop/image-category-thumbnail-speakers.png')} alt='a black speaker'/>
                </div>
                <div className='category-item-name'>
                    <span>Speakers</span>
                    <div className='shop-item'>
                        <span>shop</span>
                        <a href='/'><RightArrow /></a>
                    </div>
                </div>
            </li>

            <li className='category-item-details'>
                <div className='category-img'>
                    <img className='image-item' src={require('../../assets/shared/desktop/image-category-thumbnail-earphones.png')} alt='a black earphone container'/>
                </div>
                <div className='category-item-name'>
                    <span>Earphones</span>
                    <div className='shop-item'>
                        <span>shop</span>
                        <a href='/'><RightArrow /></a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ThumbnailSection