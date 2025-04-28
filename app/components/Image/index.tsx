"use client"
import React from 'react'
import Image from 'next/image'
interface ImageProps {
  url?: string;// Նկարների URL
  description?: string;// Նկարների նկարագրություն
  style?: string;// CSS class-ի անուն
  width?: number;// Նկարի լայնությունը
  height?: number;// Նկարի բարձրությունը
  loading?: 'lazy' | 'eager'; // Նկարի բեռնումի ռեժիմ (lazy/eager)
  fallback?: string;// Error-ի դեպքում fallback նկարը
  sizes?: string;// Պատկերների չափերը տարբեր էկրանների համար
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void; // Error handling
  blurEffect?: boolean;// Մթագնման էֆեկտ (blur)
  priority?: boolean;// Ուշադրության նկարը (priority)
  hoverEffect?: boolean;// Մկնիկի սահելու դեպքում էֆեկտ
  iconName?: string;   // Icon-ի անուն
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}
const CustomImage: React.FC<ImageProps> = ({
  url,description,style,width,height,loading,fallback,sizes,
  onError,onClick,blurEffect,priority,hoverEffect,iconName,className
}) => {
  const fallbackSrc = fallback || '/errors.jpg'
  const blurClass = blurEffect ? 'filter blur-sm' : ''
  const hoverClass = hoverEffect ? 'hover:scale-105 transition-transform duration-300' : ''
    // եթե iconName կա, icon ցույց տուր
  if (iconName) {
    return (
      <div className='custom_icon'>
         <i
        className={`icon-${iconName} ${className}`}
        style={{
          fontSize: width,    // օգտագործում ենք width որպես size
          height: height,
          display: 'inline-block',
          lineHeight: 1,
        }}
        aria-hidden="true"
      />
      </div>
     
    );
  }
  // եթե url կա, նկար ցույց տուր
  if (url) {
    return (
      <div className='custom_image'>
        <Image
          onClick={onClick}
          src={`/${url}`|| fallbackSrc}
          alt={description || 'Image'}
          className={`${style} ${blurClass} ${hoverClass}`}
          width={width || 50}
          height={height || 50}
          loading={loading}
          priority={priority}
          sizes={sizes}
          onError={onError || ((e) => { (e.target as HTMLImageElement).src = fallbackSrc })}/>
      </div>
    );
  }
  // եթե ոչ icon ոչ էլ url, ոչինչ մի ցույց տուր
  return null;
}
export default CustomImage


// <CustomImage iconName="user"/>
// // <CustomImage url='USA.png' width={24} height={24}/>