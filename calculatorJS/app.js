// Pricing configuration
const pricing = {
    productRate: 0.2,
    orderRate: 0.25,
    packages: {
        basic: 30,
        standard: 45,
        premium: 60
    },
    accounting: 35,
    terminal: 5
};

// Get DOM elements
const productsInput = document.getElementById('products');
const ordersInput = document.getElementById('orders');
const packageSelect = document.getElementById('package');
const accountingCheckbox = document.getElementById('accounting');
const terminalCheckbox = document.getElementById('terminal');
const productsRange = document.getElementById('products-range');
const ordersRange = document.getElementById('orders-range');
const productsPriceEl = document.getElementById('products-price');
const ordersPriceEl = document.getElementById('orders-price');
const packagePriceEl = document.getElementById('package-price');
const accountingPriceEl = document.getElementById('accounting-price');
const terminalPriceEl = document.getElementById('terminal-price');
const totalPriceEl = document.getElementById('total-price');

// Calculate and update prices
function calculatePrices() {
    const productsQty = parseInt(productsInput.value) || 0;
    const ordersQty = parseInt(ordersInput.value) || 0;
    const selectedPackage = packageSelect.value;

    // Izracunaj cene
    const productsPrice = productsQty * pricing.productRate;
    const ordersPrice = ordersQty * pricing.orderRate;
    const packagePrice = pricing.packages[selectedPackage];
    const accountingPrice = accountingCheckbox.checked ? pricing.accounting : 0;
    const terminalPrice = terminalCheckbox.checked ? pricing.terminal : 0;

    productsRange.textContent = `${productsQty} * ${pricing.productRate}`;
    ordersRange.textContent = `${ordersQty} * ${pricing.orderRate}`;

    productsPriceEl.textContent = `$${productsPrice.toFixed(1)}`;
    ordersPriceEl.textContent = `$${ordersPrice.toFixed(1)}`;
    packagePriceEl.textContent = `$${packagePrice}`;
    accountingPriceEl.textContent = `$${accountingPrice}`;
    terminalPriceEl.textContent = `$${terminalPrice}`;

    // Vsota
    const total = productsPrice + ordersPrice + packagePrice + accountingPrice + terminalPrice;
    totalPriceEl.textContent = `$${total.toFixed(1)}`;
}

// AddEventlistener
productsInput.addEventListener('input', calculatePrices);
ordersInput.addEventListener('input', calculatePrices);
packageSelect.addEventListener('change', calculatePrices);
accountingCheckbox.addEventListener('change', calculatePrices);
terminalCheckbox.addEventListener('change', calculatePrices);

calculatePrices();
