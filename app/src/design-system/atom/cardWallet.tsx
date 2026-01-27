import React from 'react';
import { TrashIcon } from '../../styles/icons/TrashIcon';

interface CardWalletProps {
    icon: React.ReactNode;
    title: string;
    address: string;
    value: string;
    currency: string;
    total: string;
    totalTransaction: number;
    className?: string;
    onDelete?: () => void;
}

const CardWallet: React.FC<CardWalletProps> = ({
    icon,
    title,
    address,
    value,
    currency,
    total,
    totalTransaction,
    className = '',
    onDelete,
        }) => {
        return (
            <div
                className={`relative w-full md:w-[calc(50%-12px)] p-5 rounded-xl border cursor-pointer transition-all duration-200 bg-card border-border hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/50 ${className}`}>
                <div className="absolute top-4 right-4">
                    <span className="w-10 h-10 text-sm rounded-full flex items-center justify-center font-bold bg-primary text-white">
                    {icon}
                    </span>
                </div>

                <button
                    onClick={onDelete}
                    title="Delete wallet"
                    className="
                    list__wallet-icon
                    absolute bottom-4 right-4 p-1.5 rounded-md
                    text-muted-foreground
                    hover:text-destructive hover:bg-destructive/10
                    transition-colors
                    "
                >
                    <TrashIcon className="w-4 h-4" />
                </button>

                <div className="pr-12">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                    {title}
                    </h3>

                    <p
                    className="text-xs text-muted-foreground font-mono truncate mb-4"
                    title={address}
                    >
                    {address}
                    </p>
                </div>

                <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">
                    {value}{' '}
                    <span className="text-sm font-medium text-muted-foreground">
                        {currency}
                    </span>
                    </p>

                    <p className="text-sm text-muted-foreground">
                    ≈ {total}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                    {totalTransaction} transactions
                    </p>
                </div>
            </div>
        );
};

export default CardWallet;