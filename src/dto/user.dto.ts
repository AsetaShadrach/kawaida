import { GenericResponseDto } from './generic.dto'
import { IsEmail, IsNotEmpty, IsNumberString, Matches, minLength, MinLength } from 'class-validator';
import { RegexEpressions } from '../constants'

export class CreateUserRequestDto{
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNumberString()
    @MinLength(7)
    idNumber: string;

    @MinLength(10)
    password: string;

    @IsNotEmpty()
    @Matches(RegexEpressions.phoneNumberRegex)
    phoneNumber: string;

    roles: Array<any>;
    companyId: string;
}

export class UserCreationResponse{
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    customerId: string;
    token?: string;
}

export class CreateUserResponseDto extends GenericResponseDto{
    responseDescription: UserCreationResponse;    
}
