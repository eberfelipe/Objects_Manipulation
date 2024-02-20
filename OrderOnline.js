// Function to add a product to the cart
function addToCart(user, product, quantity) {
    const itemInCart = {
        item: product,
        quantity: quantity
    };
    user.cart.push(itemInCart);
}

// Customers
const patricia = { name: "Patricia", cart: [] };
const carlos = { name: "Carlos", cart: [] };
const renato = { name: "Renato", cart: [] };
const jose = { name: "José", cart: [] };
const roberto = { name: "Roberto", cart: [] };

// Products
const tv = { name: "TV Samsung 4K", priceInCents: 129900 };
const notebook = { name: "Notebook Dell", priceInCents: 399990 };
const mouse = { name: "Mouse MX Master 3", priceInCents: 23000 };
const keyboard = { name: "Keychron K8 Keyboard", priceInCents: 50000 };
const usbCable = { name: "2 Meter USB Cable", priceInCents: 1990 };
const charger = { name: "Portable Charger", priceInCents: 4590 };
const webcam = { name: "Webcam C920s", priceInCents: 80000 };
const monitor = { name: "LG 29 FHD Monitor", priceInCents: 129900 };

// Adding products as requested
// a. José
addToCart(jose, tv, 1);
addToCart(jose, usbCable, 2);
addToCart(jose, webcam, 1);

// b. Carlos
addToCart(carlos, notebook, 2);

// c. Patricia
addToCart(patricia, keyboard, 1);
addToCart(patricia, usbCable, 2);
addToCart(patricia, charger, 1);
addToCart(patricia, mouse, 1);
addToCart(patricia, monitor, 1);

// d. Renato
addToCart(renato, webcam, 5);

// e. Roberto
addToCart(roberto, webcam, 1);
addToCart(roberto, usbCable, 2);
addToCart(roberto, monitor, 1);

// Example for verification: Displaying José's cart
console.log("José's Cart:", jose.cart);
