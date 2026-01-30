import React from "react";
import TransactionItem, { TransactionType, TransactionStatus } from "./transactionItem";

export interface Transaction {
    id: string;
    type: TransactionType;
    hash: string;
    amount: number;
    date: string;
    status: TransactionStatus;
}

interface DetailWalletProps {
    title: string;
    address: string;
    balance: number;
    currency?: string;
    transactions: Transaction[];
    onClose?: () => void;
}

const DetailWallet: React.FC<DetailWalletProps> = ({
    title,
    address,
    balance,
    currency = "BTC",
    transactions,
    onClose,
    }) => {
    return (
        <aside className="lg:col-span-1">
        <div className="sticky top-24">
            <div className="border border-border rounded-xl bg-card p-6 min-h-[400px]">
            <div className="h-full flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                    <h2 className="text-xl font-semibold text-foreground">
                    {title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-mono truncate max-w-[240px]">
                    {address}
                    </p>
                </div>

                {onClose && (
                    <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                    </button>
                )}
                </div>

                {/* BALANCE */}
                <div className="py-6 text-center border-b border-border">
                <p className="text-sm text-muted-foreground mb-1">
                    Current Balance
                </p>
                <p className="text-4xl font-bold text-foreground">
                    {balance.toFixed(4)}{" "}
                    <span className="text-lg text-muted-foreground">
                    {currency}
                    </span>
                </p>
                </div>

                {/* TRANSACTIONS */}
                <div className="flex-1 overflow-auto py-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Transaction History
                </h3>

                <div className="space-y-3">
                    {transactions.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-10">
                        No transactions yet
                    </p>
                    )}

                    {transactions.map((tx) => (
                    <TransactionItem
                        key={tx.id}
                        type={tx.type}
                        hash={tx.hash}
                        amount={tx.amount}
                        currency={currency}
                        date={tx.date}
                        status={tx.status}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>
        </aside>
    );
};

export default DetailWallet;
