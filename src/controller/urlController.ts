import { Request, Response } from "express"
import { nanoid } from "nanoid"
import { UrlService } from "../services/urlServices"


class URLController{

    async shorten(req: Request, res: Response){

        try{

            const { originURL } = req.body
            const url = await new UrlService().findUrl(originURL)

            if(url){
                res.json(url)
                console.log(url)
                return
            }

            const hash = nanoid()
            const shortURL = `${process.env.API_URL}/${hash}`
            const newUrl = await new UrlService().Create(originURL, hash, shortURL)
            res.json(newUrl)

        

        }catch(err){

            console.log(err.message)
            process.exit(1)
        }
        

    }


    async redirect(req:Request, res: Response){


        try{

            const { hash } = req.params
            const url = await new UrlService().findHash(hash)

            if(url){

                res.redirect(url.originURL)
                return
            }
        }catch(err){
            res.send("Page not Found")
            process.exit(1)
        }
    }


    async findAllUrls(req: Request, res: Response){

        try{

            const url = await new UrlService().findAll()

            res.json(url)

        

        }catch(err){

            console.log(err.message)
            process.exit(1)
        }
        

    }

}



export { URLController }