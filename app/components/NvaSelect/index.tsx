'use client'
import React,{useState} from 'react'
import './style.scss'
import {businessdirectoryItem, travelDealsItem, eventsItem, videosItem, jobsItem,BuySellItem,RealItem} from '../../models/selectItems'
import { useNavigation } from '@/app/hooks/Navigation'
import { CustomMultiselect,CustomGroupedDropdown,CustomButton } from '../index'
const NavSelect = () => {
    const { navigate } = useNavigation();
    return (
        <div className='navication_select'>
            <div className='navication_select-container'>
                <CustomMultiselect
                    items={businessdirectoryItem}
                    title='Business Directory'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='dropdown'
                    handleClick={() => navigate('/listing-category')}/>
                <CustomButton title='Latest News'className='NewsButton'onClick={() => navigate('/listing-category')}/>
                <CustomMultiselect
                    items={travelDealsItem}
                    title='Travel Deals'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='dropdown'/>
                <CustomMultiselect
                    items={eventsItem}
                    title='Events'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='dropdown'/>
                <CustomMultiselect
                    items={videosItem}
                    title='Videos'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='dropdown'
                    handleClick={() => navigate('/listing-category')}/>
                <CustomButton title='Shop' className='NewsButton'/>
                <CustomButton title='Social Feeds' className='NewsButton'/>
                <CustomButton title='Music'  className='NewsButton'/>
                <CustomMultiselect
                    items={jobsItem}
                    title='Jobs'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='dropdown'
                    handleClick={() => navigate('/listing-category')}/>
                <CustomGroupedDropdown 
                    menu={BuySellItem} 
                    title='Buy/Sell'
                    styleItem="BusinessItem"
                    styleMenu='MenuBusiness'
                    styleButton="BusinessButton"
                    icon='dropdown'
                    styleMenuCategory="MenuCategory"/>
                <CustomGroupedDropdown 
                    menu={RealItem}
                    title='Real Estate'
                    styleItem="BusinessItem"
                    styleMenu='MenuBusiness'
                    styleButton="BusinessButton"
                    styleMenuCategory="MenuCategory"
                    icon='dropdown'/>
                <CustomButton title='Advertise With Us'  className='NewsButton'/> 
      </div>
        </div>
    )
}

export default NavSelect
