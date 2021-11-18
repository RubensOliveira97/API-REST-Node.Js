const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{

    res.status(200).send({
        mensagem:'usando GET na rota de produtos'
    })
})

router.post('/',(req, res, next)=>{

    res.status(201).send({
        mensagem:'usando POST na rota de produtos'
    })
})

router.get('/:id_produto',(req, res, next)=>{
    const id = req.params.id_produto;
    if(id === 'especial'){

        res.status(200).send({
            mensagem:'Você descobriu o id especial',
            id:id
        })
    }else{
        res.status(200).send({
            mensagem:'Você passou um id'
        })
    }


})


router.delete('/',(req, res, next)=>{

    res.status(201).send({
        mensagem:'usando DELETE nos produtos'
    })
})

router.patch('/',(req,res,next)=>{

    res.status(200).send({
        mensagem:"usando PATCH"
    })
})


module.exports = router;