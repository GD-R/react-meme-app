import React from 'react'
import logo from '../images/troll-face.png'

export default function Header() {
  return (
    <>
        <header className='flex items-center '>
        <img src={logo} alt='troll-images' className='h-14 mr-2'/>
        <h3 className='mr-auto text-white text-xl'>Meme Generator</h3>
        <h4 className='text-white'>React Scrimba Header</h4>
        </header>
    </>
  )
}
