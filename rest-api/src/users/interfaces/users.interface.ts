import {Document} from "mongoose";


export interface User extends Document {
    readonly username:string;
    readonly password:string;
    readonly email:string;
    readonly role:string;
    readonly phone_number:string;
}
