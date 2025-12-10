import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-100 break-inside-avoid print:shadow-none print:border-black print:mb-8 ${className}`}>
      {children}
    </div>
  );
};