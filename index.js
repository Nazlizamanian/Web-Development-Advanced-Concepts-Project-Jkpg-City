const express = require('express');
const app = express();
const port = 3000;

const stores= require('./stores.json');



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