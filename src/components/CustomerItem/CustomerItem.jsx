

const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className='customer-item'>
        <div className='customer-info'>
          <img src="https://i.pravatar.cc/300
            " alt="" className='customer-avatar'/>
            <span className='customer-name'>{customer.customerName}</span>
        </div>
        <button onClick={() => handleDelete(customer)} className="delete-button">
          <i className="bi bi-trash3"></i>
        </button>
      </li>
  )
}

export default CustomerItem