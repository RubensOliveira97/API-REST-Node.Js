import { express } from "express";
import { router } from "express";

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


export default router;