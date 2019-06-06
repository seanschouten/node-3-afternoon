require('dotenv').config()
const express = require('express');
const massive = require('massive');
const PCC = require('./controllers/productsController')

const app = express();

const { SERVER_PORT , CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
})

app.post('/api/products', PCC.create)
app.get('/api/products', PCC.getAll)
app.get('/api/products:id', PCC.getOne)
app.put('/api/products:id', PCC.update)
app.delete('/api/products:id', PCC.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}.`);
});