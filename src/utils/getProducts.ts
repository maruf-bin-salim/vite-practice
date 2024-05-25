const DEMO_PRODUCTS = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
    },
    {
        id: 6,
        name: "Product 6",
        price: 600,
    },
    {
        id: 7,
        name: "Product 7",
        price: 700,
    },
    {
        id: 8,
        name: "Product 8",
        price: 800,
    },
    {
        id: 9,
        name: "Product 9",
        price: 900,
    },
    {
        id: 10,
        name: "Product 10",
        price: 1000,
    },
];


async function getAllProducts() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DEMO_PRODUCTS;
}

async function getProductById(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DEMO_PRODUCTS.find((product) => product.id === id);
}


export { getAllProducts, getProductById};