const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "POST":
      res.end("You want to create a new employee.");
      break;

    case "GET":
      let id = req.url.split("/")[1];
      if (id) {
        res.end("You want to get a certain employee.");
      } else {
        res.end("You want to get all employees.");
      }
      break;

    case "PUT":
        res.end("You want to update a certain employee completely.");
      break;

    case "PATCH":
        res.end("You want to update a certain employee partially.");
      break;

    case "DELETE":
        res.end("You want to delete a certain employee.");
      break;

    default:
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening to http://localhost:3000.");
});
