import React from 'react'
import { icon } from '../assets'

const Footer = () => {
  return (
    <footer className='w-full max-container text-center'>
      <p className='pb-10'>Made with <img src={icon} width={26} height={26} className="inline"/> by Nisha.</p>
    </footer>
  )
}

export default Footer
