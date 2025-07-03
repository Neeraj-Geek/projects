import { useEffect, useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/Expense";
import Header from "./components/Header/Header";

const getStoredExpenses = () => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
};
function App() {
  const [expenses, setExpenses] = useState(getStoredExpenses);
  const [filterCategory, setFilterCategory] = useState("All");
  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
    console.log("New expense added:", expense);
  };
  const handleDeleteExpense = (id) => {
    const filtered = expenses.filter((expense) => expense.id !== id);
    setExpenses(filtered);
  };
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalExpense = expenses.reduce((acc, cur) => {
    return acc + Number(cur.amount);
  }, 0);

  console.log(filterCategory, expenses);
  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filterCategory);
  return (
    <>
      <Header />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <ExpenseList
        expenseListItem={filteredExpenses}
        handleDeleteExpense={handleDeleteExpense}
      />
      {expenses.length > 0 && (
        <div
          className="total-box"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <h3>Total Spent: ₹{totalExpense.toFixed(2)}</h3>
        </div>
      )}
    </>
  );
}

export default App;
