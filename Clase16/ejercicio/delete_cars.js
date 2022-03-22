const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options)

knex.from('cars')
    .where('id', 1)
    .del()
        .then(() => console.log("data deleted"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });