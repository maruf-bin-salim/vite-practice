import { useEffect, useState } from "preact/hooks";
import { Link, useParams } from "react-router-dom"
import { getProductById } from "./utils/getProducts";
import { MoveLeftIcon } from "lucide-react";
import PageLoader from "./components/PageLoader";

export default function DetailPage() {

    // get id from the url
    const { id } = useParams();
    const [product, setProduct] = useState<{
        id: number;
        name: string;
        price: number;
        description: string;
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

    if(isLoading) {
        return (
            <PageLoader />
        )
    }

    return (
        <div className="flex flex-col p-4">
            <Link to="/">
               <MoveLeftIcon size={24} />
            </Link>
            

            {
                !isLoading && product &&
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full m-auto border-2 border-gray-200 md:w-[50%] lg:w-[40%] mt-10">
                    <div className="text-xl font-semibold">{product?.name}</div>
                    <div className="text-xl font-semibold">${product?.price}</div>
                    <p className="text-gray-500">
                        {product.description}
                    </p>
                    <button className="p-2 mt-5 text-white bg-blue-500 rounded-lg">Add to Cart</button>
                </div>
            }

        </div>

    )
}