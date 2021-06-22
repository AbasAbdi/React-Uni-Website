var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var db = require("./database.js");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8080;

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok. Server is running." });
});

// List all the customer information
app.get("/customer", (req, res, next) => {
  let sql = `SELECT * FROM customer`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// List all the sale information
app.get("/sale", (req, res, next) => {
  let sql = `SELECT * FROM sale`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// List all the basket information
app.get("/basket", (req, res, next) => {
  let sql = `SELECT * FROM basket`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// Listing all the products information
app.get("/product", (req, res, next) => {
  let sql = `SELECT * FROM product`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// Adding new basket information into the database
app.post("/basket/", (req, res, next) => {
  var errors = [];
  if (!req.body.prod_id) {
    errors.push("Product ID not specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    bt_img: req.body.bt_img,
    bt_name: req.body.bt_name,
    prod_id: req.body.prod_id,
    cust_id: req.body.cust_id,
    bt_size: req.body.bt_size,
    bt_quantity: req.body.bt_quantity,
    bt_price: req.body.bt_price,
    bt_delivery: req.body.bt_delivery,
    bt_oldq: req.body.bt_oldq,
    prod_cost: req.body.prod_cost,
  };
  var sql =
    "INSERT INTO basket(bt_img, bt_name, prod_id, cust_id, bt_size, bt_quantity, bt_price, bt_delivery, bt_oldq, prod_cost) VALUES (?,?,?,?,?,?,?,?,?,?)";
  var params = [
    data.bt_img,
    data.bt_name,
    data.prod_id,
    data.cust_id,
    data.bt_size,
    data.bt_quantity,
    data.bt_price,
    data.bt_delivery,
    data.bt_oldq,
    data.prod_cost,
  ];

  db.run(sql, params, function (err, result) {
    if (err) {
      console.log(res.status(400).json({ error: err.message }));
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// Adding new sale information into the database
app.post("/sale/", (req, res, next) => {
  var errors = [];
  if (!req.body.prod_name) {
    errors.push("Product name not specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    prod_name: req.body.prod_name,
    cust_name: req.body.cust_name,
    t_quantity: req.body.t_quantity,
    t_cost: req.body.t_cost,
    t_price: req.body.t_price,
    profit: req.body.profit,
  };
  var sql =
    "INSERT INTO sale(prod_name, cust_name, t_quantity, t_cost, t_price, profit) VALUES (?,?,?,?,?,?)";
  var params = [
    data.prod_name,
    data.cust_name,
    data.t_quantity,
    data.t_cost,
    data.t_price,
    data.profit,
  ];

  db.run(sql, params, function (err, result) {
    if (err) {
      console.log(res.status(400).json({ error: err.message }));
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// Adding a new Customers Info into the database
app.post("/customer/", (req, res, next) => {
  var errors = [];
  if (!req.body.fName) {
    errors.push("Customer first name not specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    isLogged: req.body.isLogged,
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    card_name: req.body.card_name,
    card_amount: req.body.card_amount,
    card_num: req.body.card_num,
    expir_month: req.body.expir_month,
    expir_year: req.body.expir_year,
    card_cvs: req.body.card_cvs,
  };
  var sql =
    "INSERT INTO customer(isLogged, fName, lName, email, phone_number, password, address1, address2, city, state, zip, country, card_name, card_amount, card_num, expir_month, expir_year, card_cvs) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  var params = [
    data.isLogged,
    data.fName,
    data.lName,
    data.email,
    data.phone_number,
    data.password,
    data.address1,
    data.address2,
    data.city,
    data.state,
    data.zip,
    data.country,
    data.card_name,
    data.card_amount,
    data.card_num,
    data.expir_month,
    data.expir_year,
    data.card_cvs,
  ];

  db.run(sql, params, function (err, result) {
    if (err) {
      console.log(res.status(400).json({ error: err.message }));
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// updating the customer's login status
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/updateCustomer/:cust_id", (req, res, next) => {
  console.log("UPDATE customer:" + req.params.cust_id);
  var data = {
    isLogged: req.body.isLogged,
  };
  console.log("UPDATE customer: data.isLogged = " + data.isLogged);
  db.run(
    `UPDATE customer set 
      isLogged = COALESCE(?,isLogged) 
           WHERE cust_id = ?`,
    [data.isLogged, req.params.cust_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the product quantity
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/updateProduct/:prod_id", (req, res, next) => {
  console.log("UPDATE Product:" + req.params.prod_id);
  var data = {
    prod_quantity: req.body.prod_quantity,
  };
  console.log("UPDATE product: data.prod_quantity = " + data.prod_quantity);
  db.run(
    `UPDATE product set 
    prod_quantity = COALESCE(?,prod_quantity) 
           WHERE prod_id = ?`,
    [data.prod_quantity, req.params.prod_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the customer's bank amount
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/updateBank/:cust_id", (req, res, next) => {
  console.log("UPDATE customer's bank:" + req.params.cust_id);
  var data = {
    card_amount: req.body.card_amount,
  };
  console.log("UPDATE customer: data.card_amount = " + data.card_amount);
  db.run(
    `UPDATE customer set 
    card_amount = COALESCE(?,card_amount) 
           WHERE cust_id = ?`,
    [data.card_amount, req.params.cust_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the product table
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/saveProduct/:prod_id", (req, res, next) => {
  console.log("UPDATE product prodID: " + req.params.prod_id);
  var data = {
    prod_img: req.body.prod_img,
    prod_name: req.body.prod_name,
    prod_desc: req.body.prod_desc,
    prod_quantity: req.body.prod_quantity,
    old_price: req.body.old_price,
    current_price: req.body.current_price,
  };
  console.log("UPDATE product = " + data.prod_name);
  db.run(
    `UPDATE product set 
    prod_img = COALESCE(?,prod_img),
    prod_name = COALESCE(?,prod_name),
    prod_desc = COALESCE(?,prod_desc),
    prod_quantity = COALESCE(?,prod_quantity), 
    old_price = COALESCE(?,old_price),
    current_price = COALESCE(?,current_price)
           WHERE prod_id = ?`,
    [
      data.prod_img,
      data.prod_name,
      data.prod_desc,
      data.prod_quantity,
      data.old_price,
      data.current_price,
      req.params.prod_id,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the customers Personal information
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/savePersonal/:cust_id", (req, res, next) => {
  console.log(
    "UPDATE customer's personal information custID: " + req.params.cust_id
  );
  var data = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
  };
  console.log("UPDATE personal information = " + data.fName);
  db.run(
    `UPDATE customer set 
    fName = COALESCE(?,fName),
    lName = COALESCE(?,lName),
    email = COALESCE(?,email), 
    phone_number = COALESCE(?,phone_number),
    password = COALESCE(?,password)
           WHERE cust_id = ?`,
    [
      data.fName,
      data.lName,
      data.email,
      data.phone_number,
      data.password,
      req.params.cust_id,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the customers shipping information
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/saveAddress/:cust_id", (req, res, next) => {
  console.log("UPDATE customer's address:" + req.params.cust_id);
  var data = {
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
  };
  console.log("UPDATE customer: data.address1 = " + data.address1);
  db.run(
    `UPDATE customer set 
    address1 = COALESCE(?,address1),
    address2 = COALESCE(?,address2),
    city = COALESCE(?,city), 
    state = COALESCE(?,state),
    zip = COALESCE(?,zip),
    country = COALESCE(?,country)
           WHERE cust_id = ?`,
    [
      data.address1,
      data.address2,
      data.city,
      data.state,
      data.zip,
      data.country,
      req.params.cust_id,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the customers banking details
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/saveBank/:cust_id", (req, res, next) => {
  console.log("UPDATE customer's Bank: " + req.params.cust_id);
  var data = {
    card_name: req.body.card_name,
    card_amount: req.body.card_amount,
    card_num: req.body.card_num,
    expir_month: req.body.expir_month,
    expir_year: req.body.expir_year,
    card_cvs: req.body.card_cvs,
  };
  console.log(
    "UPDATE customer: data.card_name = " +
      data.card_name +
      data.card_amount +
      data.card_num +
      data.expir_month +
      data.expir_year +
      data.card_cvs
  );
  db.run(
    `UPDATE customer set 
    card_name = COALESCE(?,card_name),
    card_amount = COALESCE(?,card_amount),
    card_num = COALESCE(?,card_num), 
    expir_month = COALESCE(?,expir_month),
    expir_year = COALESCE(?,expir_year),
    card_cvs = COALESCE(?,card_cvs)
           WHERE cust_id = ?`,
    [
      data.card_name,
      data.card_amount,
      data.card_num,
      data.expir_month,
      data.expir_year,
      data.card_cvs,
      req.params.cust_id,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// deleting a basket from the database
app.delete("/deleteBasket/:bt_id", (req, res, next) => {
  console.log("DELETE Basket " + req.params.bt_id);

  db.run(`DELETE FROM basket WHERE bt_id=?`, req.params.bt_id),
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    };
});

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});
