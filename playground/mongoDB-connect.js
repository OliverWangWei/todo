// const mongoClient = require('mongodb').MongoClient

// destructuring object and assign to a variable that is 
// same as object's variable
const { MongoClient, ObjectID } = require('mongodb')

// var obj = new ObjectID()
// console.log(obj) // print object id

// 如果沒有該db mongo會幫你創建
MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server')
        }
        console.log('Connected to MongoDb server')
        const db = client.db('TodoApp')

        // 在還沒有放入資料已先db是不會被創建的
        // 如果沒有該collection會自己幫你創建
        // db.collection('Todos').insertOne({ // insert a document
        //     text: 'Something to do',
        //     complete: false
        // }, (err, result) => {

        //     if (err) {
        //         return console.log('Unable to insert todo : ', result)
        //     }

        //     // ops will store all of the docs that insert to collection 
        //     console.log(JSON.stringify(result.ops, undefined, 4))

        // })

        // db.collection('Users').insertOne({
        //     name: 'oliver',
        //     age: 20,
        //     address: 'my home'
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert user : ', err)
        //     }

        //     // Date 讓時區正確
        //     console.log(JSON.stringify(Date(result.ops[0]._id.getTimestamp()), undefined, 4))
        // })

        // find() will return a cursor that is a pointer to collection 
        // toArray() is to converts collection to js object, but it will return 
        // a promise first untill it finished. 
        db.collection('Users').find().toArray().then( // just like dart
            (value) => {
                console.log(JSON.stringify(value, undefined, 4))
            }
        )

        client.close()

    }) // use mongo its protocol

