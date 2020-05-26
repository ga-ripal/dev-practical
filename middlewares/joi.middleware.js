const apiHelper = require('../helpers/api.helper');
const GLOBALS = require('../constants/global.constant');

const joiMiddleware=(schema)=>{
    return(req,res,next)=>{
        const result = schema.validate(req.body);
        if(result.error){
            const {details}=result.error;
            const MESSAGE= details.map((i)=>i.message).join(',');
            return apiHelper.failure(res,[],MESSAGE,
                GLOBALS.STATUS_CODE.BAD_REQUEST);
        }
        next();
    }
}
module.exports = joiMiddleware;