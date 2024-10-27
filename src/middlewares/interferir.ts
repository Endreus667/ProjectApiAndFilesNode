import express, {RequestHandler} from 'express';

export const inverferir: RequestHandler = (req, res, next) => { 
    let logged = true;

    if(logged) {
        next();
    } else {
        res.status(403).json({error: "Middleware não permitido"})
    }

    
}