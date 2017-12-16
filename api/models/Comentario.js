/**
 * Comentario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**   POST     /comentario

{
	"comentario": "O medicamento não teve sucesso em menores",
	"medicoId": "1",
	"apresentacao" : "5a2ece891646fe283354f9e9"
	
}
 */

module.exports = {

  attributes: {
    comentario: {
      type: 'string'
    },
    medicoId: {
      type: 'string'
    },
    // Add a reference to Apresentacao
    apresentacao: {
      model: 'apresentacao'
    }
  }
};

