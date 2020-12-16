import mongoose from 'mongoose';

class MongodbDAO
{
   
    static connect()
    {

        return new Promise((resolve,reject)=>{

            mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                resolve();
            })
            .catch(err=>reject(err));

        })
     
    }
}


export default  MongodbDAO;
