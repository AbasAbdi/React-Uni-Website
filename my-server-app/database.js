var sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("Timber.db", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to the Timber database.");
});

// Creating the table for the customer database
const sql =
  "CREATE TABLE customer(cust_id INTEGER PRIMARY KEY, isLogged text, fName text, lName text, email text, phone_number INTEGER, password text, address1 text, address2 text, city text, state text, zip text, country text, card_name text, card_amount INTEGER, card_num INTEGER, expir_month INTEGER, expir_year INTEGER, card_cvs INTEGER)";

// Creating the table for the basket database
const sql2 =
  "CREATE TABLE basket(bt_id INTEGER PRIMARY KEY, bt_img text, bt_name text, prod_id INTEGER, cust_id INTEGER, bt_size text, bt_quantity INTEGER, bt_price INTEGER, bt_delivery text, bt_oldq INTEGER, prod_cost INTEGER, FOREIGN KEY (cust_id) REFERENCES customer(cust_id), FOREIGN KEY (prod_id) REFERENCES product(prod_id) ON DELETE CASCADE ON UPDATE CASCADE)";

// Creating the table for the product database
const sql3 =
  "CREATE TABLE product(prod_id INTEGER PRIMARY KEY NOT NULL, prod_img text, prod_category text, prod_gender text,	prod_name text,	prod_desc text,	prod_quantity INTEGER,	prod_cost INTEGER, old_price text, current_price INTEGER)";

// Creating the table for the sale database
const sql4 =
  "CREATE TABLE sale(sale_id INTEGER PRIMARY KEY NOT NULL, prod_name text, cust_name text, t_quantity INTEGER, t_cost INTEGER, t_price INTEGER, profit INTEGER)";

db.run(sql2, (err) => {
  if (err) {
    // Basket table already created
    console.log("Basket table already created.");
  } else {
    console.log("Basket table created.");
  }
});
db.run(sql4, (err) => {
  if (err) {
    // Sale table already created
    console.log("Sale table already created.");
  } else {
    console.log("Sale table created.");
  }
});

db.run(sql, (err) => {
  if (err) {
    // Customer table already created
    console.log("Customer table already created.");
  } else {
    console.log("Customer table created.");
  }
  // First time customer table created, inserting some rows
  console.log("First time customer table created, creating some rows.");

  var insert =
    "INSERT INTO customer(cust_id, isLogged, fName, lName, email, phone_number, password, address1, address2, city, state, zip, country, card_name, card_amount, card_num, expir_month, expir_year, card_cvs) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  db.run(insert, [
    43,
    "yes",
    "Guest",
    "",
    "",
    0000,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    0000,
    0000,
    0000,
    0000,
    0000,
  ]);
});

db.run(sql3, (err) => {
  if (err) {
    // Product table already created
    console.log("Product table already created.");
  } else {
    console.log("Product table created.");
  }
  // First time product table created, inserting some rows
  console.log("First time product table created, creating some rows.");

  var insert =
    "INSERT INTO product(prod_id,	prod_img,	prod_category, prod_gender,	prod_name, prod_desc, prod_quantity, prod_cost, old_price,	current_price) VALUES(?,?,?,?,?,?,?,?,?,?)";

  // Womenswear #w
  db.run(insert, [
    11,
    "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/102933s.jpg",
    "Blazers",
    "Female",
    "Reiss Hayes Wool Blend Slim Fit Blazer",
    "The Hayes blazer in black is a tailoring classic that will transcend seasons and work with a multitude of outfits.",
    520,
    180,
    "239",
    229,
  ]);
  db.run(insert, [
    12,
    "https://www.hobbs.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-hobbs-catalog/default/dw68eefd2c/images/0121-4100-9094L00/0121-4100-9094L00-KIERA-JACKET-SAND_02.jpg?sw=1280&sh=1792&strip=false",
    "Blazers",
    "Female",
    "Kiera Linen Blazer",
    "A light layer to take the chill off cool summer days. In a collared design, the Kiera blazer is detailed with contemporary front patch pockets and faux horn button. Endlessly easy to wear and style, you'll find it looks just as good with jeans as it does with dresses. Crafted from 100% linen.",
    470,
    90,
    "205",
    129,
  ]);
  db.run(insert, [
    13,
    "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87182895_76_D2.jpg?ts=1612355682048&imwidth=502&imdensity=2",
    "Blazers",
    "Female",
    "Double-breasted structured blazer",
    "Structured design. Lapel-collar. Long sleeve. Lapel with notch. Welt pocket on the chest. Two side welt pockets. Double button fastening.",
    490,
    40,
    "79.99",
    69.99,
  ]);
  db.run(insert, [
    14,
    "https://asset1.cxnmarksandspencer.com/is/image/mands/Wool-Silk-Blend-Tailored-Blazer-1/SD_01_T50_1010W_Y0_X_EC_0?$PDP_IMAGEGRID_1_MD$",
    "Blazers",
    "Female",
    "Principles - Ivory Relaxed Blazer",
    "This blazer from Principles is perfect for the office and beyond. Sleek and sophisticated, it's cut to a relaxed fit with a stylish skinny lapel collar and imitation pockets. Style with skinny fit trousers and brogues.",
    500,
    10,
    "23",
    19,
  ]);
  db.run(insert, [
    15,
    "https://img.ltwebstatic.com/images3_pi/2019/11/30/15750843659f29896cd70f1e5378734cdbdf23bba2_thumbnail_600x.webp",
    "Dressy Tops",
    "Female",
    "Frilled Neck Lace Sheer Blouson Sleeve Blouse",
    "We've given this jersey top fabric interest with a pleated woven front, making it smart but simple enough for dashing out of the door on busy mornings. The easy-to-wear style can dress up skinny jeans or complement a pencil skirt, while the short sleeves keep you cool.",
    470,
    7,
    "13",
    10,
  ]);
  db.run(insert, [
    16,
    "https://img.ltwebstatic.com/images2_pi/2019/08/12/15656001654049911899_thumbnail_600x799.webp",
    "Dressy Tops",
    "Female",
    "Lace Sleeve Ruffle Neck Blouse",
    "We've given this jersey top fabric interest with a pleated woven front, making it smart but simple enough for dashing out of the door on busy mornings. The easy-to-wear style can dress up skinny jeans or complement a pencil skirt, while the short sleeves keep you cool.",
    500,
    5,
    "13",
    8,
  ]);
  db.run(insert, [
    17,
    "https://img.ltwebstatic.com/images3_pi/2019/11/09/1573263626b7beb0075934b2c977592b3c3917731c_thumbnail_600x.webp",
    "Dressy Tops",
    "Female",
    "Lace Detail Blouson Sleeve Blouse",
    "We've given this jersey top fabric interest with a pleated woven front, making it smart but simple enough for dashing out of the door on busy mornings. The easy-to-wear style can dress up skinny jeans or complement a pencil skirt, while the short sleeves keep you cool.",
    600,
    10,
    "18",
    16,
  ]);
  db.run(insert, [
    18,
    "https://img.ltwebstatic.com/images3_pi/2020/07/22/1595391492c371a9bf4fc024d0c1308c8e5439f60a_thumbnail_600x.webp",
    "Dressy Tops",
    "Female",
    "Single Breasted Blouson Sleeve Blouse",
    "We've given this jersey top fabric interest with a pleated woven front, making it smart but simple enough for dashing out of the door on busy mornings. The easy-to-wear style can dress up skinny jeans or complement a pencil skirt, while the short sleeves keep you cool.",
    470,
    5,
    "13",
    8,
  ]);
  db.run(insert, [
    19,
    "https://i.ibb.co/VSQPmy6/1.jpg",
    "Coats and Jackets",
    "Female",
    "Checked Belted Wrap Coat",
    "A classic style with a subtle twist, the D ring belt brings a modern finish to this timeless piece, which instantly takes your looks sky high.",
    470,
    103,
    "349",
    188,
  ]);
  db.run(insert, [
    20,
    "https://i.ibb.co/F71q3Nq/2.jpg",
    "Coats and Jackets",
    "Female",
    "Patch Pocket Boiled Wool Jacket",
    "Boasting a delectable boiled wool finish and a placket finished fastening, it will make you feel as good as it looks.",
    500,
    118,
    "250",
    170,
  ]);
  db.run(insert, [
    21,
    "https://i.ibb.co/D1GQcxT/3.jpg",
    "Coats and Jackets",
    "Female",
    "Long Belted Wrap Pvercoat",
    "In a timeless wrap style with a button fastening and belted finish, it’s a sure-fire piece to see you through the season ahead.",
    600,
    70,
    "119",
    89,
  ]);
  db.run(insert, [
    22,
    "https://i.ibb.co/smKnYq6/4.jpg",
    "Coats and Jackets",
    "Female",
    "Checked Belted Wrap Coat",
    "A classic style with a subtle twist, the D ring belt brings a modern finish to this timeless piece, which instantly takes your looks sky high.",
    470,
    120,
    "219",
    150,
  ]);
  db.run(insert, [
    23,
    "https://johnlewis.scene7.com/is/image/JohnLewis/005176083?$fashion-ui$",
    "Skirts",
    "Female",
    "Damsel In A Dress Margot Tailored Suit Skirt, Black",
    "In a fuss-free straight cut, this knee-length skirt from Damsel in a Dress is made from soft and fluid material that will last you wear after wear.",
    600,
    28,
    "45",
    34,
  ]);
  db.run(insert, [
    24,
    "https://johnlewis.scene7.com/is/image/JohnLewis/004929335?$fashion-ui$",
    "Skirts",
    "Female",
    "Damsel In A Dress Nina City Suit Skirt, Black",
    "A fitted pencil skirt is a must-have for any work wardrobe. So why don't you go head-to-toe tailoring and pair this double button front design with the matching Nina suit jacket from Damsel in a Dress. Sleek, sophisticated, powerful.",
    500,
    23,
    "56",
    34,
  ]);
  db.run(insert, [
    25,
    "https://johnlewis.scene7.com/is/image/JohnLewis/003921209?$fashion-ui$",
    "Skirts",
    "Female",
    "Damsel In A Dress City Skirt, Black",
    "This piece hugs the body and finishes just below the knee to create a feminine silhouette. It features frill detailing at the back, adding to its elegant charm.",
    470,
    20,
    "40",
    25,
  ]);
  db.run(insert, [
    26,
    "https://johnlewis.scene7.com/is/image/JohnLewis/003675217?$fashion-ui$",
    "Skirts",
    "Female",
    "Damsel In A Dress Amelia Suit Skirt, Mid Blue",
    "This skirt hugs the body and finishes just below the knee to create a defined silhouette. It features metallic eyelet detailing at the waist, adding to its elegant charm.",
    470,
    28,
    "64",
    32,
  ]);

  // Meanswear | #m
  db.run(insert, [
    27,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0059889_170_a.jpg",
    "Blazers",
    "Male",
    "Navy Texture Tailored Fit Blazer",
    "This navy textured suit by Scott & Taylor is a signature style for any wardrobe that's both versatile and stylish, in a signature micro check that adds texture and colour to your wardrobe.",
    300,
    100,
    "160",
    110,
  ]);
  db.run(insert, [
    28,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0053483_150_a.jpg",
    "Blazers",
    "Male",
    "Dion Blue Herringbone, Check Slim Fit Mens Blazer",
    "Boasting an elegant Dion Blue, this Herringbone blazer features opulent gold trims and a subtle heritage check.",
    600,
    112,
    "140",
    125,
  ]);
  db.run(insert, [
    29,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0061290_150_a.jpg",
    "Blazers",
    "Male",
    "Blue Check Slim Fit Blazer",
    "A meeting of classic British tailoring styles with a modern, statement slim fit for men.",
    500,
    58,
    "135",
    65,
  ]);
  db.run(insert, [
    30,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0056684_150_a.jpg",
    "Blazers",
    "Male",
    "Occasions Light Blue Slim Suit",
    "This slim fit light blue suit is a great alternative to the more pedestrian blacks and greys at formal occasions.",
    400,
    78,
    "120",
    89,
  ]);
  db.run(insert, [
    31,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0067118_010_a.jpg",
    "Dress Shirts",
    "Male",
    "White Texture Shirt",
    "A versatile white shirt from Ted Baker – a must-have in every man’s wardrobe featuring an inner retro geometric print.",
    470,
    37,
    "65",
    45,
  ]);
  db.run(insert, [
    32,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0067080_170_a.jpg",
    "Dress Shirts",
    "Male",
    "Navy Slim Fit Shirt",
    "Plain doesn't mean dull. Button up in style with this navy blue cotton blend shirt from Ted Baker.",
    500,
    29,
    "45",
    34,
  ]);
  db.run(insert, [
    33,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0067117_710_a.jpg",
    "Dress Shirts",
    "Male",
    "Lilac Texture Shirt",
    "A stylish take on a classic, this lilac shirt by Ted Baker is perfect for everyday wear.",
    600,
    30,
    "56",
    34,
  ]);
  db.run(insert, [
    34,
    "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge//0067115_170_a.jpg",
    "Dress Shirts",
    "Male",
    "Navy Ditsy Print Shirt",
    "This navy ditsy print shirt by Ted Baker is a modern take on a truly classic design.",
    470,
    40,
    "65",
    45,
  ]);
  db.run(insert, [
    35,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0065671_290_a.jpg",
    "Coats and Jackets",
    "Male",
    "Black Melton Regular Fit Overcoat",
    "Overcoat season bites hard – but Ted Baker’s fashion sense will bite back harder with this sharp black Melton overcoat",
    470,
    90,
    "329",
    98,
  ]);
  db.run(insert, [
    36,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0065672_170_a.jpg",
    "Coats and Jackets",
    "Male",
    "Navy Twill Slim Fit Overcoat",
    "Overcoat season bites hard – but Ted Baker’s fashion sense will bite back harder with this navy blue, pure wool overcoat.",
    500,
    88,
    "329",
    98,
  ]);
  db.run(insert, [
    37,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0060384_170_a.jpg",
    "Coats and Jackets",
    "Male",
    "Warm Navy Structure Overcoat",
    "A warm, durable overcoat for men by Racing Green. Made from a wool blend fabric in navy blue, this eyecatching overcoat features a heritage style combined with modern, stylish menswear.",
    600,
    87,
    "199",
    99,
  ]);
  db.run(insert, [
    38,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0060447_300_a.jpg",
    "Coats and Jackets",
    "Male",
    "Beige Lightweight Coat",
    "Jeff Banks presents his ever-enduring coat - a lightweight layering jacket for any wardrobe, ideal for everyday wear in a durable, everyday coat for men.",
    470,
    40,
    "140",
    49,
  ]);
  db.run(insert, [
    39,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0054530_290_a.jpg",
    "Trousers",
    "Male",
    "Black Regular Fit Trousers",
    "A versatile black suit trouser by Racing Green - ideal for any wardrobe.",
    600,
    20,
    "45",
    34,
  ]);
  db.run(insert, [
    40,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0049553_250_a.jpg",
    "Trousers",
    "Male",
    "Plain Silver Grey Tonic Slim Fit Trousers",
    "Limehaus are a true trendsetter in menswear, with statement suits that are cut slimmer than usual.",
    470,
    22,
    "56",
    34,
  ]);
  db.run(insert, [
    41,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0040282_150_a.jpg",
    "Trousers",
    "Male",
    "Blue Plain Tailored Fit Trouser",
    "Perfect for those important events and available in a choice of fits to suit all ages, shapes and sizes. Be it a wedding, a day at the races or a night on the tiles, the occasions range has it covered at an exceptional price.",
    600,
    18,
    "40",
    25,
  ]);
  db.run(insert, [
    42,
    "https://cdn.suitdirect.co.uk/upload/siteimages/large//0060093_150_a.jpg",
    "Trousers",
    "Male",
    "Stvdio Bright Blue Jaquard Super Slim Brit Trousers",
    "Jeff Banks' Brit Collection is dedicated to youth and modernism, with a focus on super slim fits and signature, colourful statements.",
    470,
    27,
    "64",
    32,
  ]);
});

// export as module, called db
module.exports = db;
