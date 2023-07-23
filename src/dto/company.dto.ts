import { GenericResponseDto } from './generic.dto';
import { IsNotEmpty } from 'class-validator';

export class CreateCompanyRequestDto{
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    companyName: string;
    
    members?: Array<string>;
    requireSignatories?: boolean;
    signatories?: Array<string>;
}

export class CompanyCreationResponse{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    companyId: string;

}
export class CreateCompanyResponseDto extends GenericResponseDto{
    @IsNotEmpty()
    responseDescription: CompanyCreationResponse;  
}

export class RecentActionsDto{
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    action: string;
}

