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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
let Transaction = exports.Transaction = class Transaction {
};
Transaction.table_alias = "t";
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "varchar", name: "id" }),
    __metadata("design:type", String)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", name: "amount" }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "transaction_type" }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "status" })
    // Initiated,  pending, successful, manually completed, failed
    ,
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "transfer_description", nullable: true })
    // String with the success or error messgage/reason/stage(e.g awaiting stk)
    ,
    __metadata("design:type", String)
], Transaction.prototype, "transactionDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "user_id" }),
    __metadata("design:type", String)
], Transaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "provider" })
    // Safaricom(mpesa), safaricom, loan
    ,
    __metadata("design:type", String)
], Transaction.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "tracking_code" }),
    __metadata("design:type", String)
], Transaction.prototype, "trackingCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "bulk_tracking_code", nullable: true })
    // Relation Id for bulk transactions
    ,
    __metadata("design:type", String)
], Transaction.prototype, "bulkTrackingCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "user_transfer_description", nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "userTransferDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "account_from" }),
    __metadata("design:type", String)
], Transaction.prototype, "account_from", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "account_to" }),
    __metadata("design:type", String)
], Transaction.prototype, "account_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", name: "transfer_metadata", nullable: true }),
    __metadata("design:type", Object)
], Transaction.prototype, "transferMetadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "transfer_origin_id", nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionOriginId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "response_body", nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "responseBody", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", name: "transaction_metadata", nullable: true }),
    __metadata("design:type", Object)
], Transaction.prototype, "transactionMetadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "created_at" }),
    __metadata("design:type", Date)
], Transaction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", name: "updated_at" }),
    __metadata("design:type", Date)
], Transaction.prototype, "updatedAt", void 0);
exports.Transaction = Transaction = __decorate([
    (0, typeorm_1.Entity)({ name: "transaction" })
], Transaction);
//# sourceMappingURL=transaction.entity.js.map