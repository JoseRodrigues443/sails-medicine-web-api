/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');


/**     LOGIN
 * http://localhost:1337/jwt/auth
{
    "email": "default@default.default",
    "password": "padeiro443"
}
 * 
 */
 
/**     SIGN UP
* http://localhost:1337/jwt/signup
{
    "email": "default@de",
    "password": "padeiro443",
    "accountType": ""
}
* 
*/
module.exports = {
  schema: true,


  attributes: {
    email: {
      type: 'string',
      required: 'true',
      unique: true // Yes unique one

    },
    password: {
      type: 'string'
    }
  }
};