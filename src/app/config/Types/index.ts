/**
    * @description      : 
    * @author           : Mário Jorge Ribeiro
    * @group            : 
    * @created          : 18/01/2023 - 11:56:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/01/2023
    * - Author          : Mário Jorge Ribeiro
    * - Modification    : 
**/

import { Request } from "express";
import mongoose from "mongoose";

interface UserInterface {
	Id?: mongoose.Types.ObjectId,
	name?: String,
	userName?: String,
	password?: string | Buffer,
	email?: String,
	isActive?: Boolean
}

interface CustomRequestInterface extends Request {
	User: User
}

type User = UserInterface;
type CustomRequest = CustomRequestInterface;

export {
	User,
	CustomRequest
};