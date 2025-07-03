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
                  <h3>Title:{item.title}</h3>
                  <small>Category: {item.category}</small>
                  <p>Amount:₹{item.amount}</p>
                  <small>Date:{item.date}</small>
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
