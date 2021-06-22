import React from "react";
import Table from "react-bootstrap/Table";

export const Report = ({ report }) => {
  const CustomerRow = (report, index) => {
    return (
      <tr key={index} className="even">
        <td>{report.Sale_ID}</td>
        <td>{report.Product_Name}</td>
        <td>{report.Customer_Name}</td>
        <td>{report.Total_Quantity_Sold}</td>
        <td>{report.Total_Cost}</td>
        <td>{report.Total_price}</td>
        <td>{report.Profit}</td>
      </tr>
    );
  };

  const CustomerTable = report.map((cust, index) => CustomerRow(cust, index));

  const tableHeader = (
    <thead className="bgvi">
      <tr>
        <th>Sales ID</th>
        <th>Product Name</th>
        <th>Customer Name </th>
        <th>Quantity Sold </th>
        <th>Total Cost</th>
        <th>Total Price</th>
        <th>Profit</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover>
      {tableHeader}
      <tbody>{CustomerTable}</tbody>
    </Table>
  );
};
