function ExpenseList({ expenseListItem, handleDeleteExpense }) {
  return (
    <>
      <section class="expense-list">
        <h2>Your Expenses</h2>
        {!expenseListItem || expenseListItem?.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul class="expense-items">
            {expenseListItem.map((item) => (
              <li key={item.id} class="expense-item">
                <div class="expense-details">
                  <h3>{item.title}</h3>
                  <p>₹{item.amount}</p>
                  <small>{item.date}</small>
                </div>
                <button
                  onClick={() => handleDeleteExpense(item.id)}
                  class="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default ExpenseList;
