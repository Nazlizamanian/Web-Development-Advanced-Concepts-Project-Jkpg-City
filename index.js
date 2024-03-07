const express = require('express');
const app = express();
const port = 3030;
const ModelClass = require('./model/model.js');

let model = null;

let p = __dirname + "/public"
app.use(express.static(p))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// API endpoint to get all stores
app.get('/api/data', async (req, res) => {
    try {
        const stores = await model.getAllStores();
        res.json(stores);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

// Route to get all stores
app.get('/stores', async (req, res) => {
    try {
        const stores = await model.getAllStores();
        res.json(stores);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

const setupServer = async () => {
    model = new ModelClass();
    await model.initDatabase();
}

app.listen(port, async () => {
    await setupServer();
    console.log(`Server listening on port ${port}`);
});
