// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c0b93fd3994e61bb915aade')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( result => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c0b8223b1c30f16acfec41f')
    }, {
        $set: {
            name: 'blahhhaa'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    })

    //db.close();
});