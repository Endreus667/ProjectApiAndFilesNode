import express from 'express'

const router = express.Router();

router.get('/produtos', (req, res) => {
    res.json({produtos: []});
})

router.get('/', (req, res) => {
    res.json({produtos: []});
})

router.get('/:id', (req, res) => { 
    const {id} = req.params;
    
    res.json({id, name: 'teclado', price: 90});
})

router.post('/', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('QUERY',req.query);
    console.log('BODY',req.body);

    res.json({produtos: []});
})

export default router;