import { useState } from "react";
function AddExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = Date.now();

    onAddExpense(formData);
    console.log("Expense Submitted:", formData);

    setFormData({ title: "", amount: "", date: "", category: "Food" });
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Expense Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}

export default AddExpenseForm;
