'use client'
import Link from "next/link";
import React, { useState } from "react";
import {MenuItem} from "../../models/selectItems"
import { CustomButton } from "../Button";
interface DropdownMenuProps {
  items: MenuItem[];
  title: string;
  styleMenu?: string;
  styleButton?: string;
  styleItem?: string;
  icon?: string;
  iconClass?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave? : (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter? : (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const CustomMultiselect: React.FC<DropdownMenuProps> = ({ items,title,icon,handleClick,iconClass,styleMenu,styleButton,styleItem,onMouseLeave,onMouseEnter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen(false);
  };
  return (
    <div className="dropdown-container"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}>
        <CustomButton 
          title={title}
          className={`"dropdown-button" ${styleButton}`}
          iconRight={icon}
          onClick={handleClick}/>
      {isOpen && (
        <div className={`"dropdown-menu" ${styleMenu} `}>
          {items.map((item) => (
            <Link key={item.id} href={`/listing-category/${item.path}/${item.id}`}>
              <div className={`"dropdown-item" ${styleItem}`}>{item.label}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


// const CustomMultiselect = () => {
//   const menuItems: string[] = [
//     "Moving / Towing / Transportation",
//     "Personal/Social Services",
//     "Pets & Animals",
//     "Real Estate Services",
//     "Recreation",
//     "Restaurants & Food",
//     "Services for Business",
//     "Shopping / Retail",
//     "Travel",
//     "View All Business Listings"
//   ];
//   return (
//     <div>
//        <DropdownMenu items={menuItems}/>
//     </div>
//   )
// }
// export default CustomMultiselect