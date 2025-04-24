'use client'
import {BiSearch} from "react-icons/bi";
import React from 'react'
import './style.scss'
import Image from '../Image'
import Dropdown from '../Dropdown'
import {CustomButton} from '../Button'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className='navbar_logo'>
                    <Image url='/logo.webp' style='navbar_logo-img'/>
                </div>
                <div className="navbar_filter_inp">
                    <Dropdown/>
                </div>
                <div className="navbar_filter_search">
                    <BiSearch/>
                </div>
                <div className="navbar_filter_btn">
                    <CustomButton
                        as='button'
                        title='ADD FREE LISTING'
                        variant='primary'
                        size='medium'
                        className='navbar_filter_btn-button'/>
                </div>
                <div className="navbar_filter_language">
                    <Image url='/us.webp' width={24} height={24}/>
                    <Image url='/arm.webp' width={24} height={24}/>
                    <Image url='/ru.webp' width={24} height={24}/>
                </div>
                <div className="navbar_filter_profile">
                    <CustomButton
                        icon="icon-user"
                        as='button'
                        title='SIGN UP'
                        variant='primary'
                        size='medium'
                        className='navbar_filter_profile_button'/>
                </div>
            </div>
        </div>
    )
}
export default Navbar