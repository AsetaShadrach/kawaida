import { GenericResponseDto } from './generic.dto';
export declare class CreateUserRequestDto {
    firstName: string;
    lastName: string;
    email: string;
    idNumber: string;
    password: string;
    phoneNumber: string;
    roles: Array<any>;
    companyId: string;
}
export declare class UserCreationResponse {
    firstName: string;
    lastName: string;
    customerId: string;
    token?: string;
}
export declare class CreateUserResponseDto extends GenericResponseDto {
    responseDescription: UserCreationResponse;
}
//# sourceMappingURL=user.dto.d.ts.map