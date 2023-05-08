import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import Rating from '../component/Rating';

function ProductPage() {
  const params = useParams();
  const { slug } = params
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!)
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div className=' mb-10'>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <div className="flex">
        <div className='w-2/4 h-2/4 '><img className='h-[70%] w-[90%] object-contain' src={product.image} alt={product.name} /></div>
        <div className='w-1/4'>
          <div className='flex flex-col mt-11'>
            <h1 className='mb-3  text-6xl'>{product.name}</h1>
            <hr />
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <hr />
            <span>${product.price}</span>
            <hr />
            <span>Description</span>
            <span>{product.description}</span>
          </div>
        </div>
        <div className='w-1/4 mt-11 ml-4'>
          <div className='w-full border-2 border-slate-200 rounded py-8'>
            <div className='flex justify-between  px-8'>
              <span>Price:</span>
              <span>${product.price}</span>
            </div>
            <hr />
            <div className='flex justify-between  mt-3 px-8'>
              <span>Status</span>
              <span><span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white">{product.countInStock !== 0 ? "In Stock" : "Out Of Stock "}</span></span>
            </div>
            <hr />
{product.countInStock!==0 && (<div className='flex justify-between  mt-3 px-8'>
              <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-full">
                Add to Cart
              </button>
            </div>)}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPage