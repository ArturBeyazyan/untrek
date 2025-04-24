"use client"
import React from 'react'
import Image from 'next/image'
interface ImageProps {
  url: string;// Նկարների URL
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
}
const CustomImage: React.FC<ImageProps> = ({
  url,description,style,width,height,loading,fallback,sizes,
  onError,blurEffect,priority,hoverEffect
}) => {
  const fallbackSrc = fallback || '/images/fallback.png'
  const blurClass = blurEffect ? 'filter blur-sm' : ''
  const hoverClass = hoverEffect ? 'hover:scale-105 transition-transform duration-300' : ''
  return (
    <div className="relative w-full h-auto">
      <Image
        src={url || fallbackSrc}
        alt={description || 'Image'}
        className={`${style} ${blurClass} ${hoverClass}`}
        width={width || 500}
        height={height || 300}
        loading={loading || 'lazy'}
        priority={priority}
        sizes={sizes}
        onError={onError || ((e) => { (e.target as HTMLImageElement).src = fallbackSrc })}/>
    </div>
  )
}
export default CustomImage