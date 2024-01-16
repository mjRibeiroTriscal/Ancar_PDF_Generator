/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 16:40:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import { Express } from "express";
import mongoDBConnection from "../database";
import appMiddlewares from "../middlewares";

export default function appConfig(app: Express): void {
    mongoDBConnection();
    appMiddlewares(app);
}