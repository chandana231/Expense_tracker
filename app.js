const express = require("express");
const { collection } = require("./mongo"); // Update this line to destructure the collection object
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// In your app.js or wherever you define your Express routes
app.get('/expenses', async (req, res) => {
    try {
        const existingExpenses = await collection.find({}).exec();
        res.json(existingExpenses);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/ExpenseForm", async (req, res) => {
  try {
    const { expenseData } = req.body;
    await collection.insertMany([expenseData]);
    res.send("Expense data added successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});