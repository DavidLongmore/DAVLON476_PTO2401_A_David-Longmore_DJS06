// A list of provinces
const provinces = [
    'Western Cape',
    'Gauteng',
    'Northern Cape',
    'Eastern Cape',
    'KwaZulu-Natal',
    'Free State',
];

// A list of names
const names = [
    'Ashwin',
    'Sibongile',
    'Jan-Hendrik',
    'Sifso',
    'Shailen',
    'Frikkie',
];

// A list of products with prices
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

// 1. ForEach Basics
// Log each name and each province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with a matching province
names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
});

// 2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log('Provinces in uppercase:', upperCaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log('Name lengths:', nameLengths);

// 4. Sorting Provinces
const sortedProvinces = [...provinces].sort(); // Spread operator to avoid mutating the original array
console.log('Sorted provinces:', sortedProvinces);

// 5. Filtering Cape
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Number of provinces not containing "Cape":', noCapeProvinces.length);

// 6. Finding 'S' in Names
const hasLetterS = names.map(name => name.toLowerCase().includes('s'));
console.log('Does the name contain "S"?', hasLetterS);

// 7. Creating Object Mapping of Names to Provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log('Names mapped to provinces:', nameProvinceMapping);

// 8. Log Products: Iterate over the products array, logging each product name
products.forEach(product => console.log(product.product));

// 9. Filter by Name Length: Filter out products with names longer than 5 characters
const shortNameProducts = products.filter(product => product.product.length <= 5);
console.log('Short name products:', shortNameProducts);

// 10. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
const totalPrice = products.reduce((total, product) => {
    let price = product.price;

    // Check if the price is a string and trim it
    if (typeof price === 'string') {
        price = price.trim();
    }

    // If the price is valid and not empty, convert to number and add to total
    if (price !== '' && !isNaN(price)) {
        return total + Number(price);
    }

    return total; // Return unchanged total for invalid prices
}, 0);
console.log('Total price:', totalPrice);

// 11. Concatenate Product Names: Use reduce to concatenate all product names into a single string
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ', ', '').slice(0, -2); // Removes last comma and space
console.log('Concatenated product names:', concatenatedNames);

// 12. Find Extremes in Prices: Identify the highest and lowest-priced items
const validPriceProducts = products.reduce((acc, product) => {
    let price = product.price;

    // Ensure the price is valid
    if (typeof price === 'string') {
        price = price.trim();
    }

    // If the price is valid, add it to the accumulator
    if (price !== '' && !isNaN(price)) {
        acc.push({ ...product, price: Number(price) });
    }

    return acc;
}, []);

// If there are valid products, calculate the highest and lowest prices
if (validPriceProducts.length > 0) {
    const prices = validPriceProducts.map(product => product.price);
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    const highestProduct = validPriceProducts.find(product => product.price === highestPrice);
    const lowestProduct = validPriceProducts.find(product => product.price === lowestPrice);

    console.log(`Highest: ${highestProduct.product}. Lowest: ${lowestProduct.product}`);
} else {
    console.log('No valid products with prices found.');
}

// 13. Object Transformation: Using map, recreate the products object with keys 'name' and 'cost'
const transformedProducts = products.map(product => ({
    name: product.product,
    cost: product.price,
}));

console.log('Transformed products:', transformedProducts);
