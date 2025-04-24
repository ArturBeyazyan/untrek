import { AiFillHome } from "react-icons/ai"; 
import React from 'react'
import './style.scss'
const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <a href="/">
                    <AiFillHome />
                        <span>home</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                    <AiFillHome />
                        <span>home</span>
                    </a>
                </li>
                <li>
                  <button className="dropdown-btn">
                    <AiFillHome />
                        <span>Create</span>
                    <AiFillHome />
                  </button>
                  <ul className="sub_menu">
                    <li>home</li>
                    <li>home</li> 
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </li>
                <li>
                  <button className="dropdown-btn">
                    <AiFillHome />
                        <span>Todo list</span>
                    <AiFillHome />
                  </button>
                  <ul className="sub_menu">
                    <li>home</li>
                    <li>home</li> 
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </li>
                <li>
                    <a href="/">
                    <AiFillHome />
                        <span>home</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                    <AiFillHome />
                        <span>home</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                    <AiFillHome />
                        <span>home</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SideBar