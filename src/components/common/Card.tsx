// src/components/common/Card.tsx

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'bordered';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  onClick
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';

  const variantClasses = {
    default: 'bg-white shadow-lg',
    elevated: 'bg-white shadow-xl',
    glass: 'glass',
    bordered: 'bg-white border-2 border-gray-200'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
