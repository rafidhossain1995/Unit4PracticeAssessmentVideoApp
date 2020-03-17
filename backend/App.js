const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
const port = 3000;

const videoRouter = require('./routes/videos');
const aboutRouter = require('./routes/about');
const HomeRouter = require('./routes/Home');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));app.use(bodyParser.json());
app.use('/videos', videoRouter);
app.use('/about', aboutRouter);
app.use('/Home', HomeRouter);



app.use((err, req, res, next) => {
    res.status(500).json({        err    })
})


app.listen(port, ()=> console.log("listening to port", port))