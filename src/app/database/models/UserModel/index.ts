/**
    * @description      : 
    * @author           : Mário Jorge Ribeiro
    * @group            : 
    * @created          : 18/01/2023 - 17:12:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/01/2023
    * - Author          : Mário Jorge Ribeiro
    * - Modification    : 
**/

import mongoose from "mongoose";
import { User } from "../../../config/Types";

export default mongoose.model<User>('User', new mongoose.Schema(
    {
        Id: mongoose.Types.ObjectId,
        name: String,
        userName: {
            type: String,
            unique: true
        },
        password: String,
        email: {
            type: String,
            unique: true
        },
        isActive: Boolean
    },
    {
        timestamps: {
            createdAt: 'dataCadastro',
            updatedAt: 'dataAtualizacao'
        },
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
            }
        }
    }
));