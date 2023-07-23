import { GenericResponseDto } from './generic.dto'
import { IsEmail, IsNotEmpty, IsNumberString, Length, Matches, minLength, MinLength } from 'class-validator';
import { RegexEpressions } from '../constants'

export class CreateUserRequestDto{
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    // @IsNumberString()
    @Length(7,9,{message:"Invalid ID number length"})
    @IsNotEmpty()
    idNumber: string;

    @Length(10,20,{message:"Password length should be 10 to 20 characters"})
    @IsNotEmpty()
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
