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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
let Company = exports.Company = class Company {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "primaryEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb", name: "members", nullable: true }),
    __metadata("design:type", Object)
], Company.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", name: "require_signatories", default: false }),
    __metadata("design:type", Boolean)
], Company.prototype, "requireSignatories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb", name: "signatories", nullable: true }),
    __metadata("design:type", Object)
], Company.prototype, "signatories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", name: "signatory_count", nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "signatoryCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb", name: "recent_actions", nullable: true }),
    __metadata("design:type", Object)
], Company.prototype, "recentActions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)({ name: "company" })
], Company);
//# sourceMappingURL=company.entity.js.map