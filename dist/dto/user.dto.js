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
exports.CreateUserResponseDto = exports.UserCreationResponse = exports.CreateUserRequestDto = void 0;
const generic_dto_1 = require("./generic.dto");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
class CreateUserRequestDto {
}
exports.CreateUserRequestDto = CreateUserRequestDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(7, 9, { message: "Invalid ID number length" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "idNumber", void 0);
__decorate([
    (0, class_validator_1.Length)(10, 20, { message: "Password length should be 10 to 20 characters" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(constants_1.RegexEpressions.phoneNumberRegex, { message: "Invalid phone number format" }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "phoneNumber", void 0);
class UserCreationResponse {
}
exports.UserCreationResponse = UserCreationResponse;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreationResponse.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreationResponse.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreationResponse.prototype, "customerId", void 0);
class CreateUserResponseDto extends generic_dto_1.GenericResponseDto {
}
exports.CreateUserResponseDto = CreateUserResponseDto;
//# sourceMappingURL=user.dto.js.map