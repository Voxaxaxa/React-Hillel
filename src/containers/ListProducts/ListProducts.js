import React from "react";
import "./ListProducts.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const TodoList = ({ categories }) => {
  const categoryList = categories;

  return (
    <div className="todo-list-container">
      <table className="category-table">
        <thead>
          <tr className="table-header">
            <th>Id</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.category}</td>
              <td>{category.name}</td>
              <td>{category.quantity}</td>
              <td>{category.price}</td>
              <td>
                <div>
                  <button><FaPencilAlt /></button>
                  <button><FaTrashAlt /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;