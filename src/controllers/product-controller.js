const productRepository = require('../repositories/product-repository');

exports.get = (req, res, next) => {
    productRepository
    .get()
    .then(r =>{
       res.status(200).send(r);
    }, e =>{
        console.log('Erro ao obter produto!', e)
        res.status(400).send({
            message: 'Erro ao obter produto!'
        });
    });
}

exports.getById = (req, res, next) => {
    productRepository
    .getById(req.params.id)
    .then(r =>{
       res.status(200).send(r);
    }, e =>{
        console.log('Erro ao obter produto!', e)
        res.status(400).send({
            message: 'Erro ao obter produto!'
        });
    });
}


exports.post = (req, res, next) => {
    productRepository
        .save(req.body)
        .then(r =>{
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
         }, e =>{
             console.log('Erro ao criar o produto', e)
             res.status(400).send({
                 message: 'Erro ao criar o produto'
             });
         });
}

exports.put = (req, res, next) => {
    productRepository
        .update(req.params.id, req.body)
        .then(r =>{
            res.status(200).send({
                message: 'Produto alterado com sucesso!'
            });
         }, e =>{
             console.log('Erro ao alterar o produto', e)
             res.status(400).send({
                 message: 'Erro ao alterar o produto'
             });
         });
}

exports.delete = (req, res, next) => {
    productRepository
        .delete(req.params.id)
        .then(r =>{
            res.status(200).send({
                message: 'Produto excluído com sucesso!'
            });
         }, e =>{
             console.log('Erro ao excluir o produto', e)
             res.status(400).send({
                 message: 'Erro ao excluir o produto'
             });
         });
}