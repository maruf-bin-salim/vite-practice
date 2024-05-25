
import { useEffect, useState } from 'preact/hooks';
import './app.css'
import ProductCard from './components/ProductCard';
import { getAllProducts } from './utils/getProducts';

import {
  Link,
} from 'react-router-dom';
import MobileNavbar from './components/MobileNav';





export default function HomePage() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
    }[]
    | null>(null);

  useEffect(() => {


    async function fetchProducts() {
      setIsLoading(true);
      const products = await getAllProducts();
      setProducts(products);
      setIsLoading(false);
      console.log(products);
    }
    fetchProducts();
  }
    , []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-xl font-semibold bg-gray-100">
        Loading...
      </div>
    )
  }


  return (
    <div className="bg-gray-100 flex flex-col min-h-[min-content]">
      <MobileNavbar/>
      <div className="grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {
          products?.map((product) => (
            <Link to={`/product/${product.id}`}>
              <ProductCard
                productName={product.name}
                productDescription="This is a product description"
                productPrice={product.price}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}