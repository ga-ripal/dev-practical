const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {
    PORT,DB_URI
} = require('./configs/env.config');

app.use(express.json())


mongoose.set('useFindAndModify',false);
mongoose.connect(DB_URI,{
    useNewUrlParser:true,
},()=>{
    console.log('connected to database')
});

require('./models/index.model');

app.use(require('./routes/index.route'));

app.get('/',(req,res)=>{
    res.send('server started')
});


app.listen(PORT,()=>{
    console.log(`server is started at ${PORT} http://localhost:${PORT}/api/v1`)
})
