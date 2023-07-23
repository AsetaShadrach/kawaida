export declare class Transaction {
    static table_alias: string;
    id: string;
    amount: number;
    transactionType: string;
    status: string;
    transactionDescription: string;
    userId: string;
    provider: string;
    trackingCode: string;
    bulkTrackingCode: string;
    userTransferDescription: string;
    account_from: string;
    account_to: string;
    transferMetadata: JSON;
    transactionOriginId: string;
    responseBody: string;
    transactionMetadata: JSON;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=transaction.entity.d.ts.map