const express = require('express');
const app = express();
const port = 3000;

const stores= require('./stores.json');

//-----------------------GET-------------------------------------
app.get('/', function (req, res) {
    const { storename } = req.query
    console.log(storename)
    const index = stores.findIndex(store => store.name === storename)
    if (index > -1) {
      res.json(stores[index])
    } else {
      res.send('Store not found!')
    }
  });


//-----------------------DELETE-----------------------------------
app.delete('/stores', (req, res)=>{
    const {search } = req.query;
    const storeIndex = stores.findIndex((row)=>{

    });

    if(storeIndex== -1){
        res.send(`Store not found`);
    }
    else{
        stores.splice(storeIndex, 1);
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });