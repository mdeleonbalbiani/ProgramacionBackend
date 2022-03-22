const { options } = require('./options/SQLite3.js')
const knex = require('knex')(options)

knex.from('articulos').select("*")
  .then((articulos) => {
        for (articulo of articulos) {
            console.log(`${articulo['id']} ${articulo['nombre']} ${articulo['precio']}`);
        }
  }).catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  })