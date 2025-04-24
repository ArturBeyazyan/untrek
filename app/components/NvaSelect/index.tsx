import React from 'react'
import CustomMultiselect from '../Multiselect'
import './style.scss'
import {businessdirectoryItem, travelDealsItem, eventsItem, videosItem, jobsItem,BuySellItem,RealItem} from '../../models/selectItems'
import {CustomButton} from '../Button'
import CustomGroupedDropdown from '../GroupMultiselect'
import { useRouter } from 'next/navigation'
const NavSelect = () => {
    const router = useRouter()
    const handleClickButton =()=>{
        console.log('dvfdsfdsf');
        router.push(`/listing-category`)
    }
    return (
        <div className='navication_select'>
            <div className='navication_select-container'>
                <CustomMultiselect
                    items={businessdirectoryItem}
                    title='Business Directory'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='icon-dropdown'
                    handleClick={handleClickButton}/>
                <CustomButton title='Latest News'className='NewsButton'/>
                <CustomMultiselect
                    items={travelDealsItem}
                    title='Travel Deals'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='icon-dropdown'/>
                <CustomMultiselect
                    items={eventsItem}
                    title='Events'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='icon-dropdown'/>
                <CustomMultiselect
                    items={videosItem}
                    title='Videos'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='icon-dropdown'/>
                <CustomButton title='Shop' className='NewsButton'/>
                <CustomButton title='Social Feeds' className='NewsButton'/>
                <CustomButton title='Music'  className='NewsButton'/>
                <CustomMultiselect
                    items={jobsItem}
                    title='Jobs'
                    styleMenu='MenuBusiness'
                    styleItem="BusinessItem"
                    styleButton="BusinessButton"
                    icon='icon-dropdown'/>
                <CustomGroupedDropdown 
                    menu={BuySellItem} 
                    title='Buy/Sell'
                    styleItem="BusinessItem"
                    styleMenu='MenuBusiness'
                    styleButton="BusinessButton"
                    icon='icon-dropdown'
                    styleMenuCategory="MenuCategory"/>
                <CustomGroupedDropdown 
                    menu={RealItem}
                    title='Real Estate'
                    styleItem="BusinessItem"
                    styleMenu='MenuBusiness'
                    styleButton="BusinessButton"
                    icon='icon-dropdown'/>
                <CustomButton title='Advertise With Us'  className='NewsButton'/>
            </div>

        </div>
    )
}

export default NavSelect
