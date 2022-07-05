import React from 'react'
import './Button.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    zx9Speaker: 'zx9-speaker',
    zx7Speaker: 'zx7-speaker'
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button