const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
res.send("Hello World");
});
// Require employee routes
const productosRoutes = require('./src/routes/productos.routes')
// using as middleware
app.use('/api/v1/productos', productosRoutes)
const fabricantesRoutes = require('./src/routes/fabricantes.routes')
// using as middleware
app.use('/api/v1/fabricantes', fabricantesRoutes)
const categoriasRoutes = require('./src/routes/categorias.routes')
// using as middleware
app.use('/api/v1/categorias', categoriasRoutes)
// listen for requests
app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});
