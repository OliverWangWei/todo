const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server')
        }
        console.log('Connected to MongoDb server')
        const db = client.db('TodoApp')

        db.collection('Users').find().toArray().then( // just like dart
            (value) => {
                console.log(JSON.stringify(value, undefined, 4))
            }
        )

        client.close()

    }) // use mongo its protocol

