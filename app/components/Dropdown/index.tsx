'use client' 
import { useState } from 'react';
import Input from '../Input';
import './style.scss';
import CustomImage from "../Image";
interface Option {
  label: string;
  icon: string;
}
export default function DropdownWithIcons() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const options: Option[] = [
    { label: "Բիզնեսների գրացուցակ", icon:'search' },
    { label: "Գնել/Վաճառել", icon:'search' },
    { label: "Միջոցառումներ",icon:'search' },
    { label: "Աշխատանքներ", icon:'addUser' },
    { label: "Անշարժ գույք", icon:'addUser' },
    { label: "Ճամփորդական առաջարկներ", icon:'search' },
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
      rightIcon={ !isOpen ? 'dropdown':  'dropdown'}
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
                 <CustomImage iconName={option.icon}/>
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