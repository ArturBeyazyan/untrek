'use client'
import { AiOutlineDown } from "react-icons/ai"; 
import { AiOutlineUp } from "react-icons/ai"; 

import { useState } from 'react';
import { FaBriefcase, FaExchangeAlt, FaCalendarAlt, FaSuitcase, FaBuilding, FaPlane } from 'react-icons/fa';
import Input from '../Input';
import './style.scss';
interface Option {
  label: string;
  icon: React.ReactNode;
}
export default function DropdownWithIcons() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const options: Option[] = [
    { label: "Բիզնեսների գրացուցակ", icon: <FaBriefcase /> },
    { label: "Գնել/Վաճառել", icon: <FaExchangeAlt /> },
    { label: "Միջոցառումներ", icon: <FaCalendarAlt /> },
    { label: "Աշխատանքներ", icon: <FaSuitcase /> },
    { label: "Անշարժ գույք", icon: <FaBuilding /> },
    { label: "Ճամփորդական առաջարկներ", icon: <FaPlane /> },
  ];

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropDown">
      <Input 
      type="text"
      placeholder='Example: restaurant, service, barber, hotel'
      value={searchTerm}
      onFocus={toggleDropdown}
      onKeyDown={toggleDropdown}
      rightIcon={  !isOpen ?  <AiOutlineDown />: <AiOutlineUp />}
      onChange={(e) => setSearchTerm(e.target.value)}  />
      {isOpen && (
        <ul className="dropDown_ul">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li 
                key={index} 
                className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSearchTerm(option.label);
                  setIsOpen(false);
                }}>
                <span className="dropDown_icon">{option.icon}</span>
                <p>
                  {option.label}
                </p>
                
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">Ոչ մի արդյունք չի գտնվել</li>
          )}
        </ul>
      )}
    </div>
  );
}