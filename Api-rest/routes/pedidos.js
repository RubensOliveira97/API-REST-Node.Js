const { Router } = require('express');
const express = require('express');
const router = express.Router();


router.get('/',(req, res, next)=>{

    res.status(200).send({
        mensagem:'Retorna pedidos'
    })
})

router.post('/',(req, res, next)=>{

    res.status(201).send({
        mensagem:'Cria pedidos'
    })
})

router.get('/:id_pedido',(req, res, next)=>{
    const id = req.params.id_produto;
   
        res.status(200).send({
            mensagem:'Detalhes do pedido',
            id_pedido:id
        })
    


})





router.delete('/',(req, res, next)=>{

    res.status(201).send({
        mensagem:'pedido EXCLUIDO'
    })
})


module.exports = router;