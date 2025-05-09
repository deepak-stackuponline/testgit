const id = 10;
const productName = "Hello Deepak";
const rating = 5;

const product = {
    id,
    productName,
    rating,
};
console.log(product);

const product2 = {
    description : "Product 2 Description",
    id,
    productName,
    rating
};

const product2desc = product2.description;
console.log(product2desc);

const{description} = product2;
console.log(description);