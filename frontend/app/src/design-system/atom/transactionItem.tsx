import React from "react";

export type TransactionType = "send" | "receive";
export type TransactionStatus = "completed" | "pending" | "failed";

interface TransactionItemProps {
    type: TransactionType;
    hash: string;
    amount: number;
    currency: string;
    date: string;
    status: TransactionStatus;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
    type,
    hash,
    amount,
    currency,
    date,
    status,
    }) => {
    const isSend = type === "send";

    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-100 hover:bg-muted transition-colors">

        <div className="flex items-center gap-3">
            <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isSend ? "bg-red-500/10" : "bg-green-500/10"
            }`}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                isSend ? "text-red-600" : "text-green-600 rotate-180"
                }`}
            >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
            </svg>
            </div>

            <div>
            <p className="font-medium text-foreground capitalize">{type}</p>
            <p
                className="text-xs text-muted-foreground font-mono truncate max-w-[140px]"
                title={hash}
            >
                {hash.slice(0, 8)}...{hash.slice(-6)}
            </p>
            </div>
        </div>

        <div className="text-right">
            <p
            className={`font-semibold ${
                isSend ? "text-foreground" : "text-green-600"
            }`}
            >
            {isSend ? "-" : "+"}
            {amount.toFixed(6)} {currency}
            </p>

            <span className="text-xs text-muted-foreground pl-5">{date}</span>
            <div className="flex items-center justify-end gap-2 mt-1">
            <span
                className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                status === "completed"
                    ? "bg-green-500/10 text-green-600"
                    : status === "pending"
                    ? "bg-yellow-500/10 text-yellow-600"
                    : "bg-red-500/10 text-red-600"
                }`}
            >
                {status}
            </span>
            </div>
        </div>
        </div>
    );
};

export default TransactionItem;
