
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";





function CustomerList( { customers,setCustomers } ) {
  
  //! Delete Customer
  const handleDelete = (item) => {
  setCustomers(customers.filter((customer) => customer.id !== item.id))
};

  return (
    <ul className='customer-list'>
      {customers.map((customer) => {
        return <CustomerItem customer={customer} 
        key={customer.id} 
        handleDelete = {handleDelete}/>
      })}
    </ul>
  );

}

export default CustomerList