/**
 * Apresentacao.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/**
 * 
 *    public int Id { get; set; }

        public string Forma { get; set; }

        public float Concentracao { get; set; }

        public int Quantidade { get; set; }

        public int MedicamentoId { get; set; }

        public Medicamento Medicamento { get; set; }

        public int FarmacoId { get; set; }
        
        public Farmaco Farmaco { get; set; }
 */
module.exports = {

  attributes: {
    forma: {
      type: 'string'
    },
    concentracao: {
      type: 'string'
    },
    quantidade: {
      type: 'string'
    },
    Medicamento: {
      model: 'Medicamento',
      required: true
    },
    Farmaco: {
      model: 'Farmaco',
      required: true
    },
    Comentarios: {
      collection: 'Comentario',
      via: "apresentacao"
    }

  }
};

