import mongoose from "mongoose";

class MongoConnection{
    
    async connect(){
        
        try{
            await mongoose.connect(process.env.MONGO_CONNECTION)
            console.log("Database conected")
         }
         catch(error){
             console.log(error.messase)
         }
    }
   
}


export { MongoConnection }