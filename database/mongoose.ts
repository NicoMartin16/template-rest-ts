import mongoose from 'mongoose'
import dotenv from 'dotenv';
const dontenvResult = dotenv.config();
if(dontenvResult.error) {
    throw dontenvResult.error;
}


class MoongoseService {


    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        serverSelectionTimeoutMS: 5000,
        // useFindAndModify: false,
    };

    constructor() {
        this.conecction();
    }

    getMongoose() {
        return mongoose
    }

    conecction = async () => {
        const uri: string = process.env.DB_CNN;
        try {
           await mongoose
                .connect(uri, this.mongooseOptions);
            console.log('Base online');
            
        } catch (error) {
            console.log(error);
            throw new Error("Error al arrancar el servidor de la bd");
            
        }
    }

}

export default new MoongoseService();
