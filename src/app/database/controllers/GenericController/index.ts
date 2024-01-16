/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 12/01/2023 - 18:23:08
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 12/01/2023
	* - Author          : mario
	* - Modification    : 
**/

import { Request, Response, NextFunction } from "express";

export default {
	notFoundMessage(req: Request, res: Response, next: NextFunction) {
		res.status(404).json({
			status: 'failed',
			message: 'Not implemented route'
		})
	}
}