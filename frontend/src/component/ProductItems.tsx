import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import Rating from './Rating'

function ProductItem({ product }: { product: Product }) {
  return (
  
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Link to={`/product/${product.slug}`}>
          <a href="#">
        <img className="rounded-t-lg" src={product.image} alt={product.name} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
                  <Rating rating={product.rating} numReviews={product.numReviews} />
                  {product.countInStock === 0 ? (
         <button disabled className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
         Out Of Stock
       </button>
        ) : (
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
           Add to Card
          </button>
        )}
    </div>
</Link>
</div>

  )
}

export default ProductItem