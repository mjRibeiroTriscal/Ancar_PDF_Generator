/**
    * @description      : 
    * @author           : Mário Jorge Ribeiro
    * @group            : 
    * @created          : 18/01/2023 - 20:34:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/01/2023
    * - Author          : Mário Jorge Ribeiro
    * - Modification    : 
**/

import { Response, NextFunction } from "express";
import bcrypt from 'bcrypt'
import UserModel from "../../models/UserModel";
import { User, CustomRequest } from "../../../config/Types";
import { DataException } from "../../../config/Exceptions";

export default {
    async register(req: CustomRequest, res: Response, next: NextFunction) {
        const {
            name,
            userName,
            email,
            password,
            isActive
        }: User = req.body;

        try {
            if (!name) throw new DataException('The field "name" is required', 'TR_JSON_ERROR', 400);
            if (!email) {
                if (!userName) throw new DataException('The field "email" is required', 'TR_JSON_ERROR', 400);
            }
            if (!password) throw new DataException('The field "password" is required', 'TR_JSON_ERROR', 400);

            // Check if user exists
            await UserModel.findOne({
                $or: [
                    { email },
                    { userName }
                ]
            }).then(user => {
                if (user) {
                    if (user.userName == userName) throw new DataException('User already exists with this username', 'TR_JSON_ERROR', 409);
                    if (user.email == email) throw new DataException('User already exists with this email', 'TR_JSON_ERROR', 409);
                }
            });

            // Create Hash password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);

            const usernameTemp = userName ? userName : email

            // Create User
            const user: User | any = new UserModel({
                userName: usernameTemp,
                name,
                email,
                password: passwordHash,
                isActive: (isActive != null && isActive != undefined) ? isActive : true
            });

            // Cadastrar Usuário
            await UserModel.create(user);

            return res.status(201).json({ message: 'User successfully created', user });
        } catch (error: Object | any) {
            let statusCode: number = 500;

            if (error.name === 'CastError') statusCode = 400;
            error.statusCode && (statusCode = error.statusCode);

            return res.status(statusCode).json({
                statusCode,
                errorMessage: "An error occurred creating user",
                error: String(error)
            });
        }
    },

    async authenticate(req: CustomRequest, res: Response, next: NextFunction) {
        const { authorization }: Object | any = req.headers;

        try {
            if (!authorization) throw new DataException('The "authorization token" is required', 'TR_HEADER_ERROR', 400);

            const credentials = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString('utf-8').split(':');
            const [email, password] = [credentials[0], credentials[1]];

            if (!email) throw new UserException('The field "username" is required', 'TR_HEADER_ERROR', 400);
            if (!password) throw new UserException('The field "password" is required', 'TR_HEADER_ERROR', 400);

            // Check if user exists
            const user: User | null = await UserModel.findOne({
                $or: [
                    { email },
                    { userName: email }
                ]
            });

            if (!user) throw new UserException('Invalid Username/Password', 'TR_HEADER_ERROR', 401);

            // Check if password match
            const checkPassword = await bcrypt.compare(password, String(user.password));

            if (!checkPassword) throw new UserException('Invalid Username/Password', 'TR_HEADER_ERROR', 401);

            req.User = user;

            next();
        } catch (error: Object | any) {
            let statusCode: number = 500;

            if (error.name === 'CastError') statusCode = 400;
            error.statusCode && (statusCode = error.statusCode);

            return res.status(statusCode).json({
                statusCode,
                errorMessage: "An error occurred authenticating user",
                error: String(error)
            });
        }
    },

    async updateUser(req: CustomRequest, res: Response, next: NextFunction) {
        const {
            Id,
            name,
            userName,
            email,
            password,
            isActive
        }: User = req.body;

        try {
            if (!Id) throw new UserException('The field "Id" is required', 'TR_JSON_ERROR', 400);

            const filter: Object | any = { '_id': Id };
            const update: Object | any = {};

            name && (update.name = name);
            email && (update.email = email);
            userName && (update.userName = userName);
            (isActive != null && isActive != undefined) && (update.isActive = isActive);

            if(password) {
                // Create Hash password
                const salt = await bcrypt.genSalt(12);
                const passwordHash = await bcrypt.hash(password, salt);
            
                password && (update.password = passwordHash);
            }

            // Check if user exists and update user
            const updatedUser: Object | any = await UserModel.findOneAndUpdate(filter, update);

            if (!updatedUser)  throw new UserException('Invalid User Id', 'TR_JSON_ERROR', 400);

            updatedUser.Id = updatedUser?._doc._id;
            delete updatedUser?._doc._id;
            delete updatedUser?._doc.__v;
            delete updatedUser?._doc.password;

            return res.status(201).json({ message: 'User successfully updated', user: updatedUser?._doc });
        } catch (error: Object | any) {
            let statusCode: number = 500;

            if (error.name === 'CastError') statusCode = 400;
            error.statusCode && (statusCode = error.statusCode);

            return res.status(statusCode).json({
                statusCode,
                errorMessage: "An error occurred updating user",
                error: String(error)
            });
        }
    },

    async deleteUser(req: CustomRequest, res: Response, next: NextFunction) {
        const { user_id }: Object | any = req.query;

        try {
            if (!user_id || user_id == 'undefined') {
                let user_idTemp = ((user_id && user_id != 'undefined') ? '"' + String(user_id) + '"' : ((user_id == '') ? 'Empty' : user_id))
				throw new UserException(`"User Id" can not be ${user_idTemp} (User Rule)`, 'TR_ID_ERROR', 400);
			}

			let guestData = await UserModel.deleteMany({ '_id': user_id });

            if(guestData.deletedCount == 0) throw new UserException(`Invalid User Id (User Rule)`, 'TR_ID_ERROR', 400);

            return res.status(202).json({ message: 'User successfully deleted', info: guestData });
        } catch (error: Object | any) {
            let statusCode: number = 500;

            if (error.name === 'CastError') statusCode = 400;
            error.statusCode && (statusCode = error.statusCode);

            return res.status(statusCode).json({
                statusCode,
                errorMessage: "An error occurred deleting user",
                error: String(error)
            });
        }
    }
}
