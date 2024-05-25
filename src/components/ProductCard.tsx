

export default function ProductCard({productName, productDescription, productPrice} : {productName: string, productDescription: string, productPrice: number}) {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-[100%] h-full">
      <div className="text-xl font-semibold">{productName}</div>
      <div className="text-lg">{productDescription}</div>
      <div className="text-xl font-semibold">${productPrice}</div>
    </div>
  )
    
}