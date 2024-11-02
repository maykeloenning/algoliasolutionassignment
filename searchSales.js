const algoliasearch = require("algoliasearch");

const searchClient = algoliasearch(
  "D1I9OIP9XS",
  "c112ff46053b3dc7f4c6fd4e7755d1f1" //API key to write
);

const index = searchClient.initIndex('products'); 

const fs = require("fs");

// Load product data from products.json
const filePath = "./data/products.json";
let productsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Discount rate of 20%
const discountRate = 0.2;

// Apply discount to items in the "Camera" category
productsData = productsData.map((product) => {
  if (product.categories && product.categories.some(category => /camera/i.test(category))) {
    product.price = Math.floor(product.price * (1 - discountRate)); //Math.floor rounds to the lowest full number
  }
  return product;
});

index
	.partialUpdateObjects(productsData, { createIfNotExists: true })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((e) => {
        console.log('error:', e);
    });



