import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    api.get("/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>

            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <Link to="{/}" className="btn">
        Buy More stocks
      </Link>
    </>
  );
};

export default Orders;