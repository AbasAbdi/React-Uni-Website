import React from "react";
import axios from "axios";
import "./App.css";
import { Report } from "./Report";
import { Header } from "./Header";
import { ExportReactCSV } from "./ExportReactCSV";
// Declaring a state variable (cor) and call (setCor)

function Sales() {
  const [cor, setCor] = React.useState("");

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

  var fetchRecords = once(function () {
    axios
      .get("http://localhost:8080/sale")
      .then((response) => {
        // handle success
        var resData = response.data;
        //var data = JSON.stringify(resData);
        setCor(resData);
      })
      .catch((err) => console.log("Error: ", err));
  });

  var report = () => {
    let custs = [];
    cor.data &&
      cor.data.map((info) => {
        const cost = "£" + info.t_cost;
        const price = "£" + info.t_price;
        const profit = "£" + info.profit;
        return custs.push({
          Sale_ID: info.sale_id,
          Product_Name: info.prod_name,
          Customer_Name: info.cust_name,
          Total_Quantity_Sold: info.t_quantity,
          Total_Cost: cost,
          Total_price: price,
          Profit: profit,
        });
      });
    return custs;
  };

  var state = {
    report: report(),
    fileName: "Sales",
  };

  return (
    <div className="App">
      {fetchRecords()}
      <Header />
      <div className="row">
        <div className="col-md-8">
          <h2>Sales</h2>
        </div>
        <div className="col-md-4 center">
          <ExportReactCSV csvData={state.report} fileName={state.fileName} />
        </div>
      </div>
      <Report report={report()} />
    </div>
  );
}

export default Sales;
