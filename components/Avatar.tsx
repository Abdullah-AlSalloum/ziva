import React from 'react';

interface AvatarProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ name, size = 'medium' }) => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  };
  
  const getContrastColor = (hexcolor: string) => {
    if (hexcolor.startsWith('#')) {
      hexcolor = hexcolor.slice(1);
    }
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
  };

  const initials = getInitials(name);
  const bgColor = stringToColor(name);
  const textColor = getContrastColor(bgColor);

  const sizeClasses = {
    small: 'w-7 h-7 text-xs',
    medium: 'w-9 h-9 text-base',
    large: 'w-16 h-16 text-2xl',
  };

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold ${sizeClasses[size]}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      title={name}
    >
      {initials}
    </div>
  );
};

export default Avatar;
