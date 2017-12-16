/**
 * Posologia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/**
 * 
        public int Id { get; set; }

        public string Descricao { get; set; }

        public string DosagemCrianca { get; set; }

        public string DosagemAdulto { get; set; }

        public int ApresentacaoId { get; set; }

        public Apresentacao Apresentacao { get; set; }

 * 
 */
module.exports = {

  attributes: {
    descricao:{
      type: 'string'
    },
    dosagem: {
      type: 'string'
    },
    quantidade:{
      type: 'string'
    },
    Apresentacao: {
      model: 'Apresentacao',
      required: true
    }
  }
};

