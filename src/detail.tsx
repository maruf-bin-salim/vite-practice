import { useEffect, useState } from "preact/hooks";
import { Link, Router, useParams } from "react-router-dom"
import { getProductById } from "./utils/getProducts";

export default function Detail() {

    // get id from the url
    const { id } = useParams();
    const [product, setProduct] = useState<{
        id: number;
        name: string;
        price: number;
    } | null>(null);

    const [isLoading, setIsLoading] = useState<Boolean>(false);

    useEffect(() => {
        async function fetchProduct(id: number) {
            setIsLoading(true);
            const product = await getProductById(id);
            console.log(product);
            if (product) {
                setProduct(product);
            }
            setIsLoading(false);
        }

        if (id) {
            // fetch product by id
            fetchProduct(parseInt(id));

        }
    }
        , [id]);

    return (
        // <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-[80%] m-auto mt-10">
        //     <div className="text-xl font-semibold">Product 1</div>
        //     <div className="text-lg">This is a product description</div>
        //     <div className="text-xl font-semibold">$100</div>
        // </div>
        <div className="flex flex-col p-4">
            <Link to="/">
                <button className="bg-blue-500 text-white p-2 rounded-lg mt-5">Back</button>
            </Link>
            {
                isLoading && <div className="text-xl font-semibold flex justify-center items-center h-96">
                    Loading...
                    </div>
            }

            {
                !isLoading && product &&
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full m-auto mt-2 border-2 border-gray-200 md:w-[50%]">
                    <div className="text-xl font-semibold">{product?.name}</div>
                    <div className="text-xl font-semibold">${product?.price}</div>
                    <button className="bg-blue-500 text-white p-2 rounded-lg mt-5">Add to Cart</button>
                </div>
            }

        </div>

    )
}