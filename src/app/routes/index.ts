/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 16:27:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import { Router } from "express";
import AuthenticationController from "../database/controllers/UserController";
import GenericController from "../database/controllers/GenericController";
import pdfController from "../database/controllers/pdfController";

const routes = Router();

// User
routes.post('/user/register', AuthenticationController.register);
routes.put('/user/update', AuthenticationController.authenticate, AuthenticationController.updateUser);
routes.delete('/user/delete', AuthenticationController.authenticate, AuthenticationController.deleteUser);

// Generate PDF
routes.post('/generatePDF', AuthenticationController.authenticate, pdfController.generatePDF);

// Redirect
routes.all('*', GenericController.notFoundMessage);


export default routes;