import { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/Expense";
import Header from "./components/Header/Header";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
    console.log("New expense added:", expense);
  };
  const handleDeleteExpense = (id) => {
    const filtered = expenses.filter((expense) => expense.id !== id);
    setExpenses(filtered);
  };
  return (
    <>
      <Header />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenseListItem={expenses}
        handleDeleteExpense={handleDeleteExpense}
      />
    </>
  );
}

export default App;
