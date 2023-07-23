import { Role } from './role.entity';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    idNumber: string;
    email: string;
    passwordHash: string;
    phoneNumber: string;
    userIsVerified: boolean;
    roles: Role[];
    registrationOtp: JSON;
    companyMembershipJson: JSON;
    pendingUpdateJson: JSON;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=user.entity.d.ts.map