
import { useEffect, useState } from 'preact/hooks';
import './app.css'
import ProductCard from './components/ProductCard';
import { getAllProducts } from './utils/getProducts';

import {
  Link,
} from 'react-router-dom';
import MobileNavbar from './components/MobileNav';
import PageLoader from './components/PageLoader';





export default function HomePage() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      description: string;
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
      <PageLoader />
    )
  }


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <MobileNavbar />
      <div className="flex flex-col gap-8 p-8 overflow-y-auto lg:flex-row md:grid md:grid-cols-2 md:gap-8 md:p-8 lg:grid-cols-3 md:w-[90%] lg:w-[80%] m-auto no-scrollbar">
        {
          products?.map((product) => (
            <Link to={`/product/${product.id}`}>
              <ProductCard
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}