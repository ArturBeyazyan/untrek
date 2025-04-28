import Link from "next/link";
import { useState } from "react";
import { CategorisedMenu } from "../../models/selectItems";
import { CustomButton } from "../Button";
interface GroupedDropdownProps {
    title: string;
    menu: CategorisedMenu[];
    styleMenu?: string;
    styleButton?: string;
    styleItem?: string;
    styleMenuCategory?:string;
    icon?: string;
    iconClass?: string;
    onMouseLeave? : (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter? : (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const CustomGroupedDropdown: React.FC<GroupedDropdownProps> = ({ title,icon,iconClass,styleItem,styleButton,styleMenu,styleMenuCategory, menu,onMouseEnter,onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen(false);
  };
  return (
    <div
      className="dropdown-container"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <CustomButton
        title={title}
        className={`${styleButton}`}
        iconRight={icon}/>
        {isOpen && (
        <div className={`${styleMenu}`}>
          {menu.map((section) => (
            <div key={section.category} 
              className={`dropdown-container-category ${styleMenuCategory}`}>
              <div className="category_items ">
                {section.category}
              </div>
              {section.items.length > 0 && section.items.map((item) => (
                <Link key={item.id} href={`/${item.path}/${item.id}`}>
                  <div className={`${styleItem}`}>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};