
app.get('/stores',(req, res)=>{
    console.log('stores')
    db.all("SELECT * FROM stores", function(error, ))

});
