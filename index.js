const express = require('express')

const app = express()

let port = 3001

app.get("/",(req,res)=>{
    res.send("Fudgy Munch")
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})