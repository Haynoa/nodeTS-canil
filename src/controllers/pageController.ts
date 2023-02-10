import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {

    res.send('Home do controler')
    //res.render('pages/home')
}


export const dogs = (req: Request, res: Response) => {

    res.send('Home de Dogs')
    //res.render('pages/dogs')
}


export const cats = (req: Request, res: Response) => {

    res.send('Home de Cats')
    //res.render('pages/cats')
}


export const fishes = (req: Request, res: Response) => {

    res.send('Home de Fishes')
    //res.render('pages/fishes')
}