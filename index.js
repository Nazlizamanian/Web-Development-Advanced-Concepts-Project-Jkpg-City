const express = require('express');
const app = express();
const port = 3000;
const ModelClass = require('./model/model.js');

let Model = null;
let model = new ModelClass(); 



//Routes ska ligga i view modeln. flytta dom 
//-----------------------GET-------------------------------------
app.get('/stores', async (req, res) => {
    const stores=await Model.getAllStores();
    res.json(stores);
    try{
        const data = await pool.query('SELECT * FROM STORES');
        console.log('Got the data')
        console.log(data.rows)

    } catch(error){
        console.log('Error msg: ', error.message)
    } finally{
        res.send(data.rows)
    }
})

const setupServer = async () => {
    Model = new ModelClass()
   await Model.initDatabase();
   
    app.listen(3000, ()=>{
    console.log(`server listening ${port}`);
 })
}

setupServer();
