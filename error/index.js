//Error Handling

const express=require('express');
const multer = require('multer');
const app=express();

/*

express.json() middleware: This middleware is used to parse incoming requests with JSON payloads. 
When a client (e.g., a browser or a mobile app) sends data to the server, it often sends it in the JSON format.
 The express.json() middleware parses the incoming JSON data, making it available in the request.body object of your Express routes.
 */

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send('Unhandeled Exception');
});


app.listen(8080)

app.get('/hello',(req,res)=>{
   try{
    if(req.query.id==1)
    {
        throw new Error('Cannot handle 0')
    }
    else{
        res.send('Welcome...')
    }
   }catch(err)
   {
    res.send('Unhandeled Exception..');
    }
})




