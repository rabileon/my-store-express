const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

routerApi(app);

app.listen(port, () => {
  console.log('my port' + port);
});
