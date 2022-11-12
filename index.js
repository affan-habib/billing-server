var express = require("express");
var app = express();
const Joi = require("@hapi/joi");
var cors = require("cors");
app.use(cors());
app.use(express.json());
const courses = [
  {
    id: 1,
    masterServiceName: "BOOK NAME ONE",
    tariffBaseAmount: 230,
  },
  {
    id: 2,
    masterServiceName: "BOOK NAME TWO",
    tariffBaseAmount: 450,
  },
  {
    id: 3,
    masterServiceName: "BOOK NAME THREE",
    tariffBaseAmount: 120,
  },
  {
    id: 4,
    masterServiceName: "BOOK NAME Four",
    tariffBaseAmount: 375,
  },
  {
    id: 5,
    masterServiceName: "BOOK NAME Five",
    tariffBaseAmount: 850,
  },
  {
    id: 6,
    masterServiceName: "BOOK NAME Six",
    tariffBaseAmount: 70,
  },
  {
    id: 7,
    masterServiceName: "BOOK NAME Seven",
    tariffBaseAmount: 45,
  },
];
const patients = {
  data: [
    {
      id: 1,
      firstName: "NAME ONE",
      patientContactNo: 1798984444,
    },
    {
      id: 2,
      firstName: "NAME TWO",
      patientContactNo: 1798984444,
    },
    {
      id: 3,
      firstName: "NAME THREE",
      patientContactNo: 1798984444,
    },
  ],
};

app.get("/", (req, res) => {
  res.send("my name is stepinfwd");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/v1/patient/all", (req, res) => {
  res.send(patients);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course with given id not find");
    return;
  }
  res.send(course);
});
app.post("/api/courses", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    masterServiceName: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course with given id not find");
    return;
  }
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course with given id not find");
    return;
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); //the server object listens on port 8080
