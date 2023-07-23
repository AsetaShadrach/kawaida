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
exports.RecentActionsDto = exports.CreateCompanyResponseDto = exports.CompanyCreationResponse = exports.CreateCompanyRequestDto = void 0;
const generic_dto_1 = require("./generic.dto");
const class_validator_1 = require("class-validator");
class CreateCompanyRequestDto {
}
exports.CreateCompanyRequestDto = CreateCompanyRequestDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyRequestDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyRequestDto.prototype, "companyName", void 0);
class CompanyCreationResponse {
}
exports.CompanyCreationResponse = CompanyCreationResponse;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyCreationResponse.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyCreationResponse.prototype, "companyId", void 0);
class CreateCompanyResponseDto extends generic_dto_1.GenericResponseDto {
}
exports.CreateCompanyResponseDto = CreateCompanyResponseDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", CompanyCreationResponse)
], CreateCompanyResponseDto.prototype, "responseDescription", void 0);
class RecentActionsDto {
}
exports.RecentActionsDto = RecentActionsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RecentActionsDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RecentActionsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RecentActionsDto.prototype, "action", void 0);
//# sourceMappingURL=company.dto.js.map