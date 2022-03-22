const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options);

knex.schema.createTable('articulos', table => {
    table.increments('id').primary().notNullable()
    table.varchar('nombre').notNullable()
    table.varchar('codigo').notNullable()
    table.float('precio')
    table.integer('stock')
})
  .then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
    knex.destroy();
  });