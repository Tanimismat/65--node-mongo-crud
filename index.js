const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Running node mongo CRUD");
})

app.listen(port, () => {
    console.log('node mongo crud', port)
})

// user: dbuser1
// password: De7LaieT5TkGPcUK


const uri = "mongodb+srv://dbuser1:De7LaieT5TkGPcUK@cluster0.sidhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//     const collection = client.db("foodExpress").collection("users");
//     console.log('db connected');
//     // perform actions on the collection object
//     client.close();
// });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        // const user = { name: 'Mahia mahi', email: 'mahi@gmail.com' };
        // const result = await userCollection.insertOne(user);
        // console.log(`User inserted with id: ${result.insertedId}`);
        app.post('/user', (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            res.send({ result: 'success' });
        });
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


