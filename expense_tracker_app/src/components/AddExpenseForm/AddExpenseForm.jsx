import { useState } from "react";
function AddExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
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

    setFormData({ title: "", amount: "", date: "" });
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
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
