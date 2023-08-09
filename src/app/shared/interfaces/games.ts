import { IUser } from "./user";

export interface IGames {
    title: string;
    userId: IUser;
    description: string;
    place: string;
    peopleNeeded: number;
    date: string;
    enrolledUsers: string[];
    imgUrl: string;
}