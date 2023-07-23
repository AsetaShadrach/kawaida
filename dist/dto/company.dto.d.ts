import { GenericResponseDto } from './generic.dto';
export declare class CreateCompanyRequestDto {
    userId: string;
    companyName: string;
    members?: Array<string>;
    requireSignatories?: boolean;
    signatories?: Array<string>;
}
export declare class CompanyCreationResponse {
    name: string;
    companyId: string;
}
export declare class CreateCompanyResponseDto extends GenericResponseDto {
    responseDescription: CompanyCreationResponse;
}
export declare class RecentActionsDto {
    userId: string;
    name: string;
    action: string;
}
//# sourceMappingURL=company.dto.d.ts.map