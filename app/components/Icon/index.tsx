import React from 'react'
interface IconsProps{
  Style:string;
  Icon: React.ReactNode;
  iconClass?: string;
}
const CustomIcons:React.FC<IconsProps> = ({Style,Icon,iconClass}) => {
  return (
    <div className={`${Style}`}>
      {Icon && <span className={iconClass}>{Icon || iconClass}</span>}
    </div>
  )
}
export default CustomIcons