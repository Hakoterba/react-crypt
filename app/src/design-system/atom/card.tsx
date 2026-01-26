import React from 'react';
import { TrashIcon } from '../../styles/icons/TrashIcon';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    value: string;
    total: string;
    valueSize?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'summary';
    className?: string;
    totalTransaction?: string;
}

const valueSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
};

const Card: React.FC<CardProps> = ({
    icon,
    title,
    value,
    total,
    valueSize = 'md',
    variant = 'default',
    className = '',
    }) => {
    const isSummary = variant === 'summary';

    return (
        <div
        className={`
            p-6 rounded-xl border
            ${isSummary
            ? 'bg-linear-to-br from-primary/10 to-primary/5 border-primary/20'
            : 'bg-card border-border'}
            ${className}
        `}
        >
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
            {!isSummary && icon && (
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-white">
                {icon}
            </span>
            )}

            <p className="text-sm text-muted-foreground">{title}</p>
        </div>

        <p className={`font-bold text-foreground ${valueSizeClasses[valueSize]}`}>
            {value}
        </p>

        <p className="text-sm text-muted-foreground mt-1">
            {total}
        </p>
        </div>
    );
};

const CardWallet: React.FC<CardProps> = ({
    icon,
    title,
    value,
    total,
    valueSize = 'md',
    variant = 'default',
    className = '',
    totalTransaction = '',
    }) => {
    const isSummary = variant === 'summary';

    return (
        <div
        className={`
            p-6 rounded-xl border
            ${isSummary
            ? 'bg-linear-to-br from-primary/10 to-primary/5 border-primary/20'
            : 'bg-card border-border'}
            ${className}
        `}
        >
        <div className="flex items-center gap-2 mb-2">
            {!isSummary && icon && (
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-white">
                {icon}
            </span>
            )}

            <p className="text-sm text-muted-foreground">{title}</p>
        </div>

        <p className={`font-bold text-foreground ${valueSizeClasses[valueSize]}`}>
            {value}
        </p>

        <p className="text-sm text-muted-foreground mt-1">
            {total}
        </p>
        <div className="ligne">
            <p className="text-sm text-muted-foreground mt-1 border-t pt-2">
                {totalTransaction} transactions
            </p>
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-white">
                <TrashIcon />
            </span>
        </div>
        </div>
    );
};

export default Card;
export { CardWallet };