'use client'
import React from 'react'
import './style.scss'
import Image from '../Image'
import Dropdown from '../Dropdown'
import {CustomButton} from '../Button'
import CustomImage from "../Image";
import {useTranslation} from '../../hooks/Translation'
import { useRouter } from 'next/navigation'
const Navbar = () => {
    const {t, changeLanguage} = useTranslation()
    const router = useRouter()
        const handleClick =()=>{
            console.log('dvfdsfdsf');
            router.push(`/`)
        }
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className='navbar_logo'>
                    <Image url='logo.webp'onClick={handleClick} style='navbar_logo-img'/>
                </div>
                <div className='navbar_filter_input'>
                    <div className="navbar_filter_inp">
                        <Dropdown/>
                    </div>
                    <div className="navbar_filter_search">
                        <CustomImage iconName='search'/>
                    </div>
                    <div className="navbar_filter_btn">
                        <CustomButton
                            as='button'
                            title={t('AddListing')}
                            size='medium'
                            className='navbar_filter_btn-button'/>
                    </div>
                </div>
                <div className='navbar_filter_list'>
                    <div className="navbar_filter_language">
                        <CustomButton as='button' onClick={() => changeLanguage('en')} url='USA.png'width={24} height={24}/>
                        <CustomButton as='button' onClick={() => changeLanguage('hy')} url='AM.png'width={24} height={24}/>
                        <CustomButton as='button' onClick={() => changeLanguage('ru')} url='RU.png'width={24} height={24}/>
                    </div>
                    <div className="navbar_filter_profile">
                        <CustomButton
                            iconLeft="addUser"
                            as='button'
                            title={t('SignUp')}
                            variant='primary'
                            size='medium'
                            className='navbar_filter_profile_button'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar