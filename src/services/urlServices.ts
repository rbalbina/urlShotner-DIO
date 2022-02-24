import { UrlModel } from "../models/Url";

class UrlService{

    async findUrl(originURL){

           return UrlModel.findOne({originURL})

    }

    async Create(originURL, hash, shortURL){
        return UrlModel.create({originURL, hash, shortURL})
    }

    async findHash(hash){
        return UrlModel.findOne({hash})
    }

    async findAll(){
        return UrlModel.find()
        }

}

export { UrlService }