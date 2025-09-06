const { MongoClient, ServerApiVersion } = require("mongodb");
const connection_uri = "mongodb+srv://learn_anas:K85iux1wBZ6plqKb@learnmongodb.izeoti9.mongodb.net/"

const client = new MongoClient(connection_uri)

async function run(){
    try{
        await client.connect()
        
        await client.db("admin").command({ping: 1});
        console.log("Connected to DB")
    } catch(e){
        console.log(e)    
    }
    finally{
        // await client.close();
    }

}

run()

