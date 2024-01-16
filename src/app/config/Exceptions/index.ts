/**
    * @description      : 
    * @author           : Mário Jorge Ribeiro
    * @group            : 
    * @created          : 18/01/2023 - 11:55:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/01/2023
    * - Author          : Mário Jorge Ribeiro
    * - Modification    : 
**/

class DataException extends Error {
    message: String | any;
    name: String | any;
    statusCode?: Number;

    constructor(message?: String, name?: String, statusCode?: String | Number) {
        super();
        name && (this.name = name);
        message && (this.message = message);
        (statusCode && !isNaN(Number(statusCode))) && (this.statusCode = Number(statusCode));
    }
    
    setName: Function = (name: String): DataException => {
        this.name = name;
        return this;
    }

    setMessage: Function = (message: String): DataException => {
        this.message = message;
        return this;
    }

    setStatusCode: Function = (statusCode: String | Number | any): DataException => {
        this.statusCode = statusCode;
        return this;
    }

    TR_JSON_ERROR: Function = (): DataException => {
        this.name = this.TR_JSON_ERROR.name;
        this.message = 'JSON cannot be processed';
        this.statusCode = 422;
        return this;
    }

    TR_ID_ERROR: Function = (): DataException => {
        this.name = this.TR_ID_ERROR.name;
        this.message = 'Invalid ID';
        this.statusCode = 400;
        return this;
    }

    TR_HEADER_ERROR: Function = (): DataException => {
        this.name = this.TR_HEADER_ERROR.name;
        this.message = 'Invalid header';
        this.statusCode = 400;
        return this;
    }

    TR_TYPE_ERROR: Function = (): DataException => {
        this.name = this.TR_TYPE_ERROR.name;
        this.message = 'Type error';
        this.statusCode = 400;
        return this;
    }
}

export { DataException };