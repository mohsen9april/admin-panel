import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import {UilEstate} from '@iconscout/react-unicons'


const Sidebar = () => {
  return (
    <div className='Sidebar'>

      <div className='logo'>
        <img src={Logo} alt="/" />
        <span>Sh<span>o</span>p</span>
      </div>

      <div className='menu'>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>
            <div className='menuItem'>
                    <UilEstate color="black" />
                    <span>Dashboard</span>
            </div>

      </div>


    </div>
  )
}

export default Sidebar
