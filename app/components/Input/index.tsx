import './style.scss'
import React from "react";

export interface InputProps {
    type : 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color' | 'file';
    placeholder : string;
    value?: string | number| undefined;
    label? : string;
    name? : string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus? : (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur? : (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown? : (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp? : (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClick? : (e: React.MouseEvent<HTMLInputElement>) => void;
    onClickIcon?(): void,
    disabled? : boolean;
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    required? : boolean;
    error?: boolean,
    errorText?: string,
    ref?: React.RefObject<HTMLInputElement>
    formStyle?: string,
    iconStyle?: string,
    Style? : string;
}
const CustomInput : React.FC < InputProps > = ({
    type,placeholder,value, label,name,
    onChange,onFocus,onBlur,onKeyDown,onKeyUp,onClick,onClickIcon,
    Style,formStyle,iconStyle,rightIcon,leftIcon, disabled,required,error,errorText,
}) => {
    function onClickInput (data: React.MouseEvent<HTMLInputElement>)  {
        onClick && onClick(data)
        console.log("onClickInput");
    }
    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        onChange && onChange(e)
        console.log("onChangeInput");
    }
    function onKeyDownInput(e: React.KeyboardEvent<HTMLInputElement>) {
        onKeyDown && onKeyDown(e)
        console.log("onKeyDownInput");
    }
    function onKeyUpInput(e: React.KeyboardEvent<HTMLInputElement>) {
        onKeyUp && onKeyUp(e)
        console.log("onKeyUpInput");
    }
    function onBlurInput(e: React.FocusEvent<HTMLInputElement>) {
        onBlur && onBlur(e)
        console.log("onBlurInput");
    }
    function onFocusInput(e: React.FocusEvent<HTMLInputElement>) {
        onFocus && onFocus(e)
        console.log("onFocusInput");
    }
    function setIconsInput() {
      if (leftIcon) {
        return <span onClick={onClickIcon} className={`G-left-icon ${leftIcon}`}/>
      }
      if (leftIcon && error) {
        return <>
          <span className={`G-left-icon ${leftIcon}`}/>
          <span className='G-error-icon icon-warning'/></>
      }
      if (rightIcon && error) {
        return <>
          <span className={`G-right-icon ${rightIcon}`}/>
          <span className='G-error-icon icon-warning'/></>
      }
      if (rightIcon) {
        return <span onClick={onClickIcon} className={`G-right-icon ${rightIcon}`}/>
      }
    }
    return (
        <div className={`${formStyle}` }>
            {setIconsInput()}
            <i className={`${iconStyle}`}></i> 
            {leftIcon && <span className="G-left-icon">{leftIcon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onClick={onClickInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                onKeyDown={onKeyDownInput}
                onKeyUp={onKeyUpInput}
                disabled={disabled}
                required={required}
                className={`${Style}`}
            />
            <i className={`${iconStyle}`}></i> 
            {rightIcon && <span className="G-right-icon">{rightIcon}</span>}
        </div>
    );
};
export default CustomInput;