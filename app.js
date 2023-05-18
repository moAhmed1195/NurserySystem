const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const teacherRouter=require("./routes/teacherRouter");
const childRouter=require("./routes/childRouter");
const classRouter=require("./routes/classRouter");
const loginRouter = require("./routes/authenticationRouter");
const authMW = require("./MiddleWares/authMW");

//call defualt function express
const server=express() ; 
mongoose.connect("mongodb://127.0.0.1:27017/NurseryDb")
        .then(() => {
            console.log("DB connected ....");
            server.listen(process.env.PORT||8080,()=>{
                console.log("server is listenining ,.....")
            });
        })
    .catch(error => {
            console.log("DB Connection Problem "+error)
        })


server.use(morgan('tiny'));

//First Middleware   --> logging

server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
});

// Second Middleware simulation for authorization

server.use((request,response,next)=>{

    if(true)
    {
     
        next();
    }
    else
    {
        // throw new Error("not Authorized");
        next(new Error("not Authroized"));
    }
});


//--------------------------routes (End points )
server.use(express.json());

server.use(loginRouter);

server.use(authMW);

server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter);


//-- Not found middleaware
server.use((request,respsone)=>{
    respsone.status(404).json({message:"Page not Found"})    
});

//- Error Middleware   catch
server.use((error,request,response,next)=>{   

    response.status(500).json({message:" exception : "+error});
});