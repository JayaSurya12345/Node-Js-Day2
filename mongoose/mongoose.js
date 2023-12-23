const mongoose=require('mongoose');
const express=require('express');

const app=express();

const mongourl='mongodb+srv://jayasuryan2021csea:Train@cluster0.uy5z8xl.mongodb.net/';

mongoose.connection.on('connected',()=>console.log('connected'))

mongoose.connect(mongourl);

app.listen(8080);

app.use(express.json());


const StudentSchema=mongoose.Schema({
    'first_name':String,
    'last_name':String,
    'rollnumber': Number
})

const StudentModel=mongoose.model('student',StudentSchema);

// app.get('/student',(req,res)=>{
//     return StudentModel.findOne({})
//     .then(result=>{
//         res.send(JSON.stringify(result));
//     })
// })


// app.post('/student',(req,res)=>{
//     return new StudentModel(req.body).save().then(result=>{
//         res.send(result.toObject())
//     })
// })

//find with id in the parameter and the databases


// app.get('/student',(req,res)=>{
//     return StudentModel.find({"_id":new mongoose.Types.ObjectId(req.query.id)})
//     .then(result=>{
//         res.send(JSON.stringify(result));
//     })
// })


//filter for name in the query params and databases


// app.get('/student',(req,res)=>{
//     return StudentModel.find({"first_name":req.query.name})
//     .then(result=>{
//         res.send(JSON.stringify(result));
//     })
// })


//bulk save in the databases

// app.post('/student/bulk',(req,res)=>{
//     const bulkData=[];
//     for(const data of req.body)
//     {
//         bulkData.push(new StudentModel(data));
//     }
//     return StudentModel.bulkSave(bulkData)
//     .then(result=>{
//         res.send(JSON.stringify(result));
//     })
// })

//Updating the value of name with id in the databases

// app.put('/student',(req,res)=>{
//     const filter={"_id": new mongoose.Types.ObjectId(req.query.id)}
//     const update={first_name:req.body.first_name}
//     return StudentModel.findOneAndUpdate(filter,update)
//     .then(result=>{
//         return res.end(JSON.stringify(result));
//     })
// })


//Deleting the documents in the databases

app.delete('/student',(req,res)=>{
    const del={"_id": new mongoose.Types.ObjectId(req.query.id)}
    return StudentModel.deleteOne(del)
    .then(result=>{
        return res.end(JSON.stringify(result));
    })
})