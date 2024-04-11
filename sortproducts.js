function sortProducts(arr) {

    let minPrice = arr.sort((a, b) => a.prodPrice - b.prodPrice);
    return a;

}

let arr = [{
        id: 1,
        prodName: 'tomatoes',
        prodPrice: 2500,
    },
    {
        id: 1,
        prodName: 'Onions',
        prodPrice: 500,
    },
    {
        id: 1,
        prodName: 'avocadoes',
        prodPrice: 300,
    },
    {
        id: 1,
        prodName: 'carrots',
        prodPrice: 2000,
    }
];

console.log(sortProducts(arr));