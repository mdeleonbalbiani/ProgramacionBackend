const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options)

knex('articulos')
    .where('id', 3)
    .del()
        .then(() => console.log("data deleted"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });