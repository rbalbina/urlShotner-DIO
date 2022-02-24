import { prop, Typegoose } from "typegoose";

class Url extends Typegoose {
  
  @prop({ required: true })
  originURL: string

  @prop({ required: true })
  hash: string

  @prop({ required: true })
  shortURL: string
}

export const UrlModel = new Url().getModelForClass(Url)
