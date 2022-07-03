import React from 'react'
import './MainSection.scss'
import Button from '../Button/Button'

const MainSection = () => {
  return (
    <main className='wrapper'>
        <section className='section1'>
            <div className='section1-img-container'>
                <img className='section1-img' src={require('../../assets/home/desktop/image-speaker-zx9.png')} alt='a black speaker'/>
            </div>
            <div className='aside'>
                <p className='aside-title'>zx9 <br /> speaker</p>
                <p className='aside-desc'>Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable <br /> sound.</p>
                <Button type="button" buttonType="zx9Speaker">See product</Button>
            </div>
        </section>
        <section></section>
        <section></section>
    </main>
  )
}

export default MainSection