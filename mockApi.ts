interface report {
    transactionId: string;
    date: string;
    accountHolderName: string;
    transactionType: string;
    amount: number;
    accountbalance: number;
}
export const getReports = async () => {
    return Promise.resolve([
        {
            transactionId: "TXN12345",
            date: "2024-12-10",
            accountHolderName: "john doe",
            transactionType: "Deposit",
            amount: 5000,
            accountbalance: 15000,
        },
        {
            transactionId: "TXN67890",
            Date: "2024-12-10",
            accountHolderName: "jane smith",
            transactionType: "withdrawal",
            amount: 2000,
            accountbalance: 13000,
        }
    ])
};
