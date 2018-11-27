/**
 * 用户信息
 */
var mongoose = require('./module/db.js'),
    Schema = mongoose.Schema;

var user = new Schema({          
    name : { type: String },                    //用户账号
    pwd: {type: String},                        //密码                 
});
