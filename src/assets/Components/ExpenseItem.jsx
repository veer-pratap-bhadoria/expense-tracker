function ExpenseItem({ item, onDelete }) {
  return (
    <div className='expense-item'>
      <span>{item.title}</span><span>₹{item.amount}</span>
      <button className='dlt-bttn' onClick={() => onDelete(item.id)}>❌</button>
    </div>

  )
}

export default ExpenseItem