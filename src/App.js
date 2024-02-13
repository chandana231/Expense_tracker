import React,{useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from "./Components/Expenses/Expenses";

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "News TV",
      amount: 10,
      date: new Date(2021, 6, 12),
    },
    {
      id: "e3",
      title: "Groceries",
      amount: 50.5,
      date: new Date(2021, 7, 25),
    },
    {
      id: "e4",
      title: "Shopping Clothes",
      amount: 25,
      date: new Date(2021, 8, 1),
    },
  ];
  
  const App =() => {
    const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
    
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
