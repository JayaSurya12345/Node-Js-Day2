const express=require('express');
const app=express();  //express object

app.listen(8080);
app.use(express.json());    //to make it json


//query is the url that is been specified  
//body is the JSON or other type of file that is been passed
//both the query and the body is the same but the way that is being passed is different 
// get,put,push,delete are same when working in the post man and in the real time we use with correct ways and 
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
1)Profile get    -- Get /v1/profile
2)Profile Update   --PUT /v1/profile
3)Getting Attendance   --GET /v1/attendance
4)Posting todays attendance    -- PUT /v1/attendance
5)Getting fees details    -- GET /v1/fee/current   --GET /v1/fee/TRANSAVTION   --  /v1/fee/miscellaneous

 */




app.get('/v1/student/profile',(req,res)=>{
    console.log("Getting Profile");
    res.send(req.query.profile_id);
    console.log(req.query.profile_id)
})

//two functions in the same API

app.put('/v1/student/profile',(req,res,next)=>{
    res.write('hello world');
    next()
    res.end()
},(req,res)=>{
    console.log('Hello world Put');
    console.log(req.body);
    res.end('heyy');
});



