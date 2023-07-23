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

    @IsNotEmpty()
    @MinLength(7)
    idNumber: string;

    @IsNotEmpty()
    @MinLength(10, {message:"Password length should be 10 or more characters"})
    password: string;

    @IsNotEmpty()
    @Matches(RegexEpressions.phoneNumberRegex,{message:"Invalid phone number format"})
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
