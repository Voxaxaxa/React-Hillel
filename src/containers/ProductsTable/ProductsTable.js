import React from "react";
import { FaPlus, FaUserAlt } from "react-icons/fa";
import ButtonProductTable from "../../components/ButtonProductTable/ButtonProductTable";
import LogoProductTable from "../../components/LogoProductsTable/LogoProductsTable";
import "./ProductsTable.css";
import TodoList from "../ListProducts/ListProducts";

function ProductsTable() {
  return (
    <div className="products-table-container">
      <LogoProductTable />
      <div className="container-button">
        <ButtonProductTable text="Preview" icon={FaUserAlt} />
        <ButtonProductTable text="Add product" icon={FaPlus} />
      </div>
      <h3>Products</h3>
      <TodoList /> 
    </div>

  );
}

export default ProductsTable;
