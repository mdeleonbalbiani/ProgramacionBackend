const { options } = require('./options/SQLite3.js')
const knex = require('knex')(options)

knex('articulos')
    .where('id', 2)
    .update({ stock: 0 })
        .then(() => console.log("data updated"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });