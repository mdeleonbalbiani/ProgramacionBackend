## Primera entrega

### Uso de rutas

- [x] Ruta base **'/api/productos'** Implementará cuatro funcionalidades 
- [x] **'GET:'** '/:id?' - me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores) 
- [x] **'POST:'** '/' -Para incorporar productos al listado (disponibles para administradores) 
- [x] **'PUT:'**'/:id' -Actualizar un producto por si id (disponibles para administradores) 
- [x] **'DELETE:'**'/:id' -Borra un producto por su id (disponibles para administradores) 

---

- [x] Ruta base **'/api/carrito'** Implementará tres rutas disponibles para usuarios y administradores: 

- [x] **'POST:'** '/' - Crea un carrito y devuelve su id.
- [x] **'DELETE:'** '/:id' - Vacía un carrito y lo elimina.
- [x] **'GET:'** '/:id/productos' - Me permite listar todos los productos guardados en el carrito
- [x] **'POST:'** '/:id/productos' - Para incorporar productos al carrito por su id de producto
- [x] **'DELETE:'** '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

- [ ] Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }




--> En el home se podrá encontrar la vista de los productos y allí mismo se podrán agregar productos al carrito

--> En el admin. se puden crear, editar, eliminar y listar los productos

--> En el carrito se podrán ver los productos agregados al mismo, vaciarlo o eliminar productos individualmente