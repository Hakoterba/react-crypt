import React from 'react';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    value: string;
    total: string;
    titleSize?: 'sm' | 'md' | 'lg';
    className?: string;
}

const titleSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
};

const Card: React.FC<CardProps> = ({
    icon,
    title,
    value,
    total,
    titleSize = 'md',
    className = '',
}) => {
    return (
        <div className={`rounded-lg border border-gray-200 p-6 shadow-sm ${className}`}>
            {icon && (
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    {icon}
                </div>
            )}
            <h2 className={`mb-2 font-medium`}>
                {title}
            </h2>

            <h3 className={`mb-2 font-semibold ${titleSizeClasses[titleSize ?? 'md']}`}>{value}</h3>
            <p className="text-sm">{total}</p>
        </div>
    );
};

export default Card;