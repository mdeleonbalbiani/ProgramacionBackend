const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options)

const articulos = [
    { nombre: 'Shampoo', precio: 200, codigo: 235, stock: 50 },
    { nombre: 'Acondicionador', precio: 250, codigo: 1258, stock: 90 },
    { nombre: 'Crema de peinar', precio: 300, codigo: 587, stock: 25 },
    { nombre: 'Peine', precio: 90, codigo: 789, stock: 60 },
    { nombre: 'Pinza', precio: 150, codigo: 856, stock: 10 }
];

knex('articulos').insert(articulos)
  .then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});