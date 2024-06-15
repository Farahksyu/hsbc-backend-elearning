const express = require('express');
const db = require('./config/database.js');
const userRoute = require('./routes/userRoute.js');
const app = express();

(async()=>{
    await db.sync()
})();

app.use(express.json());
app.use(userRoute);
app.listen(3000,() => console.log('server running port 3000'));

