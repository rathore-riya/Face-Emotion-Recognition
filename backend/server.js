const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./user");
app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.post("/contactus", async (req, res) => {
    try {
      const { Name, Phoneno, Email, Message } = req.body;
      console.log(req.body);
  
      const userContact = new User({
        Name,
        Phoneno,
        Email,
        Message
      });
  
      await userContact.save();
      console.log(req.body);
      res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});