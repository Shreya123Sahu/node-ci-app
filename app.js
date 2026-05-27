const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD Node App Running 🚀");
});

app.get("/health",(req,res)=>{
    res.send("Server is in good health");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});