
import { useEffect, useState } from 'preact/hooks';
import './app.css'
import ProductCard from './components/ProductCard';
import { getAllProducts } from './utils/getProducts';

import {
  Link,
} from 'react-router-dom';


function MobileNavbar({ isOpen, setIsOpen }: { isOpen: Boolean, setIsOpen: Function }) {

  return (
    <div className="flex items-center justify-between p-4 text-white bg-gray-800">
      <div className="text-xl font-semibold">Logo</div>
      <div className="text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>
      {
        isOpen && (
          <div className="absolute top-0 left-0 flex flex-col w-full h-screen p-4 text-white bg-gray-800">
            <div className="flex justify-between w-full">
              <div className="text-xl font-semibold">Logo</div>
              <div className="flex justify-end w-full text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                close
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 w-full text-4xl">

              <Link to="/" className="py-2">Home</Link>
              <Link to="/about" className="py-2">About</Link>
              <Link to="/contact" className="py-2">Contact</Link>
            </div>
          </div>
        )
      }
    </div>
  )

}


export default function HomePage() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
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
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
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