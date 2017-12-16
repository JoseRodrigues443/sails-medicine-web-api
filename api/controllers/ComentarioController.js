/**
 * ComentarioController
 *
 * @description :: Server-side logic for managing comentarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getCommentsByApresentacaoId(req, res) {
        Comentario.find({apresentacao: req.params.id}).exec(function (err, comentarios) {
            if (err) {
                return res.json(err.status, { err: err });
            }
            //console.log(comentarios);
            if (comentarios) {
                res.json(200, comentarios);
            }
        });

    }
};

