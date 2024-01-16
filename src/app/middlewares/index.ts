/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 17:12:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import express, { Express } from "express";
import cors from "cors";
import routes from "../routes";

export default function appMiddlewares(app: Express): void {
    app.use(cors());
    app.use(express.json({limit: '1mb'}));
    app.use(routes);
}
