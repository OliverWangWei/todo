const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server')
        }
        console.log('Connected to MongoDb server')
        const db = client.db('TodoApp')

        // deleteMany

        db.collection('Todos').deleteMany({ text: 'eat luanch' }).then(
            (result) => {
                console.log(result)
            }
        )

        // delteOne 只刪除第一個看到符合的條件
        db.collection('Todos').deleteOne({text: 'eat lunch'}).then(
            (result) => {
                console.log(result)
            }
        )

        // findOneAndDelete 與上一個一樣 不過會顯示精簡的資訊 
        db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then(
            (result) => [
                console.log(result)
            ]
        )

        client.close()

    }) // use mongo its protocol

