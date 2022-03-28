var admin = require("firebase-admin");

var serviceAccount = require("./db/basefirebase-a6d20-firebase-adminsdk-lhpyz-2f9d05c638.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Firebase up');

CRUD()

async function CRUD () {
    const db = admin.firestore()
    const query = db.collection('usuarios')

    try{
        const id = 1;
        const doc = query.doc(`${id}`)

        await doc.create({name: "Roberto", age: 34})
        console.log("data creada");
    }
    catch(error){
        console.log(error);
    }
}