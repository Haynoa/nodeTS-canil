import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {

    res.send('Home da Search')
    //res.render('pages/search')
}