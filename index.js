// const express = require('express')//
//  const router = require('./router/router1')
// const app = express()
// const port = 3000;
// app.use(express.json());
// app.use('/',router);



// app.listen(port, () => {
//   console.log('Example app listening on port ${port}')
// })




//////   --------   /////  

const express = require('express');
const app=express()
const connectDB = require('./backend/db');

// const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
const routes=require("./router/router1")
app.use('/api/users/',routes );

const PORT =  5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
