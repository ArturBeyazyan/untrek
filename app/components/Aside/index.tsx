import React from 'react'
import './style.scss'
import { businessdirectoryItem, travelDealsItem,eventsItem,videosItem,jobsItem,BuySellItem,RealItem } from '../../models/selectItems'
const Aside = () => {
    return (
        <div className='aside'>
            <div className='aside__title'>
                <button>Back to Home</button>
              </div>
            <div className='aside__list'>
            <ul className="mt-4 space-y-2">
          {[...businessdirectoryItem,...travelDealsItem,].map(item => (
            <li key={item.id}>
              <button
                className="text-blue-600 hover:underline">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
            </div>
        </div>
    )
}

export default Aside
