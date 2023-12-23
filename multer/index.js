const express=require('express');
const multer=require('multer');
const port=3000;
const app=express()

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

//Set up storage for upload files

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }

});


//create the multer instance

const upload=multer({storage:storage});

app.post('/upload',upload.single('files'),(req,res)=>{
    //Handle the uploaded file
    res.json({message:'File Uploaded successfully!'});
})
