export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    avatar: string;
    wallet: string[];
    chatHistory: string[];
    isSignedIn: boolean;
    accessToken: "";
    expiresIn: "";
}

export type SingInUserDto = {
    email: string;
    password: string;
}

export type CreateCommunityDto = {
    owner: string;
    members: string[];
}