


//-----------------------Stores?district=Öster-----------------------
app.get('/districts', (req, res)=>{

    const district = {};
    
        for (const store of store) {
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
