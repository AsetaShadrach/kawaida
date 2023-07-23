"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const typeorm_1 = require("typeorm");
// todo: remove nullable for the new fields
let Payment = exports.Payment = class Payment {
};
Payment.table_alias = "t";
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "varchar", name: "id" }),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "transaction_id" })
    // Initiated,  pending, successful, manually completed, failed
    ,
    __metadata("design:type", String)
], Payment.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "status" })
    // Initiated,  pending, successful, manually completed, failed
    ,
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "payment_description", nullable: true })
    // More description on the payment status
    ,
    __metadata("design:type", String)
], Payment.prototype, "paymentDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", name: "amount" }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "mpesa_tracking_code" }),
    __metadata("design:type", String)
], Payment.prototype, "mpesaTrackingCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "conversation_id" }),
    __metadata("design:type", String)
], Payment.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "originator_conversation_id", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "originatorConversationID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", name: "callback", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "callback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "response_body", nullable: true })
    // Whether failed or successful add response body here
    ,
    __metadata("design:type", Object)
], Payment.prototype, "responseBody", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", name: "payment_metadata", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "paymentMetadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "created_at" }),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "updated_at" }),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "callback_at", nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "callbackAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "processed_by", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "processedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "processed_at", nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "processedAt", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)({ name: "payment" })
], Payment);
//# sourceMappingURL=payments.entity.js.map