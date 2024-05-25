import { useEffect, useState } from "preact/hooks";
import { Link, useParams } from "react-router-dom"
import { getProductById } from "./utils/getProducts";

export default function DetailPage() {

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
        <div className="flex flex-col p-4">
            <Link to="/">
                <button className="p-2 mt-5 text-white bg-blue-500 rounded-lg">Back</button>
            </Link>
            {
                isLoading && <div className="flex items-center justify-center text-xl font-semibold h-96">
                    Loading...
                    </div>
            }

            {
                !isLoading && product &&
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full m-auto mt-2 border-2 border-gray-200 md:w-[50%]">
                    <div className="text-xl font-semibold">{product?.name}</div>
                    <div className="text-xl font-semibold">${product?.price}</div>
                    <button className="p-2 mt-5 text-white bg-blue-500 rounded-lg">Add to Cart</button>
                </div>
            }

        </div>

    )
}