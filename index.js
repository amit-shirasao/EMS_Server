const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// #region: API calls.

// Create       POST  
app.post('/', (req, res)=>{
    let newEmp = req.body;
    res.send({
        "message": "You requested to create an employee.",
        "data": newEmp
    })
})   

// Read All     GET 

// Read One     GET     (pass an id)

// Update Fully         PUT         (pass an id and full object)

// Update Partially     PATCH       (pass an id and partial object)

// Delete       DELETE  (pass an id)

//#endregion: API calls.

app.listen(3000, () => {
  console.log("Express.js sever is listening on http://localhost:3000.");
});
