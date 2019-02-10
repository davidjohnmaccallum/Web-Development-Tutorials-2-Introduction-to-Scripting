const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://david:${process.env.DB_PASS}@cluster0-2jplm.gcp.mongodb.net/test?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {

    if (err) {
        console.log(err);
        client.close();
        return;
    }

    console.log("Connected to MongoDB");
    
    const collection = client.db("test").collection("scripts-demo");

    collection.insertOne({
        firstName: "David",
        lastName: "Mac"
    }, function(err) {
        if (err) {
            console.log(err);
            client.close();
            return;
        }

        console.log("Inserted record");
        client.close();

    });

});