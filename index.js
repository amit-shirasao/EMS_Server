const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// #region: API calls.

// Create       POST  (pass full object)
app.post("/", (req, res) => {
  let newEmp = req.body;
  res.send({
    message: "You requested to create an employee.",
    data: newEmp,
  });
});

// Read All     GET
app.get("/", (req, res) => {
  res.send({
    message: "You requested to get all the employees.",
    data: null,
  });
});

// Read One     GET     (pass an id)
app.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send({
    message: `You requuested to get the employee with id ${id}.`,
    //   "You requested to get the employees with id " + id + ".",
    data: { id: id },
  });
});

// Update Fully         PUT         (pass an id and full object)
app.put("/:id", (req, res) => {
  let id = req.params.id;
  let updatedEmployee = req.body;
  res.send({
    message: `You requuested to update (fully) the employee with id ${id}.`,
    data: updatedEmployee,
  });
});

// Update Partially     PATCH       (pass an id and partial object)

// Delete       DELETE  (pass an id)

//#endregion: API calls.

app.listen(3000, () => {
  console.log("Express.js sever is listening on http://localhost:3000.");
});
