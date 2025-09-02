const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectionString =
  "mongodb+srv://amitshirasao_db_user:FgZd1zjI7UgqtG3M@employee.jkjzosd.mongodb.net/";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Schema and Model for "Employee" Cluster.
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isGraduate: Boolean,
});
const employeeModel = mongoose.model("Employee", employeeSchema);

// #region: API calls.

// Create       POST  (pass full object)
app.post("/", async (req, res) => {
  let newEmp = new employeeModel(req.body);
  await newEmp.save();
  res.send({
    message: "Employee got created.",
    data: newEmp,
  });
});

// Read All     GET
app.get("/", (req, res) => {
  employeeModel.find().then((allEmployees) => {
    res.send({
      message: "You requested to get all the employees.",
      data: allEmployees,
    });
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
app.patch("/:id", (req, res) => {
  let id = req.params.id;
  let updatedEmployee = req.body;
  res.send({
    message: `You requuested to update (partially) the employee with id ${id}.`,
    data: updatedEmployee,
  });
});

// Delete       DELETE  (pass an id)
app.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send({
    message: `You requuested to delete the employee with id ${id}.`,
    data: { id: id },
  });
});

//#endregion: API calls.

// Mongoose Code:
mongoose.connect(connectionString).then(() => {
  console.log("MongoDB is connected.");
  app.listen(3000, () => {
    console.log("Express.js sever is listening on http://localhost:3000.");
  });
});
