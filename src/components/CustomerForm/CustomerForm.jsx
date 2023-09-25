import { useState } from 'react';
import './CustomerForm.css';

const CustomerForm = ({addNewCustomer}) => {

    const [customerName, setCustomerName] = useState(" ");


    //! When Submitted
    const handleSubmit = (event) => {
      event.preventDefault();

      const NewCustomer = {
        id: Math.floor(Math.random() * 1000000000000),
        customerName
      }

      addNewCustomer(NewCustomer);

      setCustomerName("");
    }


    return (
      <form className='customer-form' onSubmit={handleSubmit}>
        <input type="text" 
        className='customer-input'
        placeholder='Add new customer' 
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}/>
        <button>
          <i className='bi bi-plus-lg'></i>
        </button>
      </form>
    )
}

export default CustomerForm