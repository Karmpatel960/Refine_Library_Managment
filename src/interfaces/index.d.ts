export interface ICategory{
    id:number;
    title:string;
}

export interface IPost {
    id: number;
    title: string;
    content: string;
    url: string;
    status: "published" | "draft" | "rejected";
    category:{id:number};
    image: [
        {
            url: string;
            name: string;
        },
    ];
    
}
import { UploadFile } from "@pankod/refine-antd";

export interface IUserAvatar {
    name: string;
    size: number;
    uid: string;
}

export interface IUserVariable {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: UploadFile[];
}

export interface IUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: IUserAvatar[];
}