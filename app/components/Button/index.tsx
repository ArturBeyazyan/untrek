import React from "react";
import './style.scss'
// 1. Տիպերի սահմանում
interface ButtonProps<T extends React.ElementType = "button"> {
  as?: T; // Թույլ է տալիս փոխել տարրի տեսակը (օր․ `a`, `button`, `div`)
  variant?: "primary" | "secondary" | "danger" | "outline"; // Կոճակի տարբերակները
  size?: "small" | "medium" | "large"; // Չափս
  title: string; // Կոճակի տեքստ
  icon?: string; // Icon (FontAwesome, Material Icons և այլն)
  iconClass?: string; // Icon-ի class (օր․ FontAwesome)
  disabled?: boolean; // Անջատված վիճակ
  className?: string; // Լրացուցիչ class-ներ
  onClick?: React.MouseEventHandler<HTMLButtonElement>;// Click իրադարձություն
}
//2.Button Կոմպոնենտ
export const CustomButton = <T extends React.ElementType = "button">({
  as,
  variant = "primary",
  size = "medium",
  title,
  icon,
  iconClass,
  disabled = false,
  className = "",
  onClick,
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
      {title}
      {icon && <i className={icon || iconClass  }></i>}
    </Component>
  );
};