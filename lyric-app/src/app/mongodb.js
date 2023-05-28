const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://shubhankarbaliyan16:Shubhsoccer7>@cluster0.8pwssvw.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);