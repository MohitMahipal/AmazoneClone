import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db, collection, getDocs ,query, orderBy } from './firebase'
import Order from './Order.js'
import Header from "./Header";
function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const ordersRef = collection(db, 'users', user.uid, 'orders');

      // Create a query that includes ordering by a specific field in descending order (e.g., created timestamp)
      const sortedQuery = query(ordersRef, orderBy('created', 'desc'));
      
      // Execute the sorted query and get the sorted results
      const sortedSnapshot = await getDocs(sortedQuery);
      
      // Access the sorted documents
     setOrders( sortedSnapshot.docs.map((doc) => ({
       id: doc.id,
       data: doc.data()
       
         
     })));
      console.log("setorder");
    };
    if (user) {
      getOrder();
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log(orders)
  return (
    <><Header />
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders.map(order => {
          return <Order order={order}/>
          // <p>sjsj</p>
        })}
        
      </div>
    </div></>
  );
}

export default Orders;
