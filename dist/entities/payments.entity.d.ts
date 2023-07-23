export declare class Payment {
    static table_alias: string;
    id: string;
    transactionId: string;
    status: string;
    paymentDescription: string;
    amount: number;
    mpesaTrackingCode: string;
    conversationId: string;
    originatorConversationID: string;
    callback: JSON;
    responseBody: JSON;
    paymentMetadata: JSON;
    createdAt: Date;
    updatedAt: Date;
    callbackAt: Date;
    processedBy: string;
    processedAt: Date;
}
//# sourceMappingURL=payments.entity.d.ts.map