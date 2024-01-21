const express = require('express');
const app = express();
const port = 8080;

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

app.get('/resturants', (req, res)=>{
    res.json(stores);

});

app.get('/stores', (req, res) => {
    const { search } = req.query;

    if (search) {
        const storeIndex = stores.findIndex((row) => row.name === search);

        if (storeIndex === -1) {
            res.send('Store not found');
        } else {
            res.json(stores[storeIndex]);
        }
    } else {
        res.json(stores);
    }
});


//-----------------------Stores?district=Öster-----------------------
app.get('/stores', (req, res)=>{

    const district = {};
    
        for (const store of stores) {
            if(store.district==='Öster'){
                district[store.district] = true; 
            }
               
        }
        res.json(Object.keys(district));
  
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


//-----------------------POST-----------------------------------
app.post('/stores', 
express.json(),
(req,res)=> {
    const {body } = req; 
}); 



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});