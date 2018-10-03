const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server')
        }
        console.log('Connected to MongoDb server')
        const db = client.db('TodoApp')

        db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID("5bb0a4adf535f506c40ad013") // 符合改變條件的doc
        }, {
                // 需要改變的field
                $set: {
                    complete: true
                },
            }, {
                // 顯示已經update過後的資料
                returnOriginal: false
            }).then((result) => {
                console.log(result)
            })

        client.close()

    }) // use mongo its protocol

