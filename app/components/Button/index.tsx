import React from "react";
import './style.scss'
import CustomImage from "../Image";
// 1. Տիպերի սահմանում
interface ButtonProps<T extends React.ElementType = "button"> {
  url?:string;
  width?: number;// Նկարի լայնությունը
  height?: number;// Նկարի բարձրությունը
  as?: T; // Թույլ է տալիս փոխել տարրի տեսակը (օր․ `a`, `button`, `div`)
  variant?: "primary" | "secondary" | "danger" | "outline"; // Կոճակի տարբերակները
  size?: "small" | "medium" | "large"; // Չափս
  title?: string; // Կոճակի տեքստ
  iconLeft?:string; // Icon (FontAwesome, Material Icons և այլն) Ձախ
  iconRight? :string; // Icon (FontAwesome, Material Icons և այլն) Աջ
  iconClass?: string; // Icon-ի class (օր․ FontAwesome)
  disabled?: boolean; // Անջատված վիճակ
  className?: string; // Լրացուցիչ class-ներ
  onClick?: React.MouseEventHandler<HTMLButtonElement>;// Click իրադարձություն
}
//2.Button Կոմպոնենտ
export const CustomButton = <T extends React.ElementType = "button">({
  as,title,iconClass,onClick,iconLeft,iconRight,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  url,width,height,
  ...rest
}: ButtonProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "button"; // Եթե `as` չկա, օգտագործում ենք `button`
  return (
    <Component
      className={`btn ${variant} ${size} ${className} ${disabled ? "disabled" : ""}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...rest} // Ավելացված հատկությունները (օր․ `href` եթե `a` է)
      >
      {iconLeft &&  <CustomImage iconName={iconLeft} />}
      {url && <CustomImage url={url} width={width} height={height} />}
      {title && <span>{title}</span>}
      {iconRight  && <CustomImage iconName={iconRight} />}
    </Component>
  );
};