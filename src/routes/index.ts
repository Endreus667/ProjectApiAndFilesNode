import express, { RequestHandler } from 'express';
import produtosRouter from './produtos'
import voosRouter from './voos' 
import { inverferir } from '../middlewares/interferir';
const router = express.Router();

router.use(inverferir);

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get("/ping", inverferir, (req, res) => {
    console.log("EXECUTOU O PING")
    res.json({pong: true });
  });
  
 router.get("/", (req, res) => {
    console.log('PARAMS', req.params);
    console.log('QUERY',req.query);
    console.log('BODY',req.body);
    let name = "endreus";
    let age = 90;
    // res.send(`olá ${name} eu tenho ${age} anos.`)
  
    res.json({ name, age });
  });
  

export default router;