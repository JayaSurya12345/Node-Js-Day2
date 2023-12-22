const express=require('express');
const app=express();  //express object

app.listen(8080);
app.use(express.json());

app.get('/v1/student',(req,res) =>{
    console.log('Hello World');
    // console.log(req.body);
    console.log(req.query.id);
    console.log(req.query.first_name);
    res.send('{msg:\'hello\'}');
    
})

app.post('/v1/student',(req,res)=>{
    console.log('Posted');
    res.send('Successfully Posted...:)');
    console.log(req.query.gender);
    console.log(req.body.first_name);

})

app.put('/v1/student',(req,res)=>{
    console.log('Put onserver');
    res.send('Successfully put on server......:)');
})


app.route('/v1/student')
.post((req,res)=>{
    res.end('{msg:\'hello\'}')
})

//curl 127.0.0.1:8080   ->can use this instead of the postman 



/*
Api's for
1)Profile get
2)Profile Update
3)Getting Attendance
4)Posting todays attendance
5)Getting fees details
 */


