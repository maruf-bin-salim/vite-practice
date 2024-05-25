const DEMO_PRODUCTS = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "This is a product description",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "This is a product description",
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is a product description",
        price: 300,
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is a product description",
        price: 400,
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is a product description",
        price: 500,
    },
    {
        id: 6,
        name: "Product 6",
        description: "This is a product description",
        price: 600,
    },
    {
        id: 7,
        name: "Product 7",
        description: "This is a product description",
        price: 700,
    },
    {
        id: 8,
        name: "Product 8",
        description: "This is a product description",
        price: 800,
    },
    {
        id: 9,
        name: "Product 9",
        description: "This is a product description",
        price: 900,
    },
    {
        id: 10,
        name: "Product 10",
        description: "This is a product description",
        price: 1000,
    },

    {
        id: 11,
        name: "Product 11",
        description: "This is a product description",
        price: 1100,
    },
    {
        id: 12,
        name: "Product 12",
        description: "This is a product description",
        price: 1200,
    },
    {
        id: 13,
        name: "Product 13",
        description: "This is a product description",
        price: 1300,
    },
    {
        id: 14,
        name: "Product 14",
        description: "This is a product description",
        price: 1400,
    },
    {
        id: 15,
        name: "Product 15",
        description: "This is a product description",
        price: 1500,
    },
    {
        id: 16,
        name: "Product 16",
        description: "This is a product description",
        price: 1600,
    },
    {
        id: 17,
        name: "Product 17",
        description: "This is a product description",
        price: 1700,
    },
    {
        id: 18,
        name: "Product 18",
        description: "This is a product description",
        price: 1800,
    },
    {
        id: 19,
        name: "Product 19",
        description: "This is a product description",
        price: 1900,
    },
    {
        id: 20,
        name: "Product 20",
        description: "This is a product description",
        price: 2000,
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