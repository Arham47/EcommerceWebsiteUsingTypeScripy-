
import {useReducer,useEffect} from "react"
import { Link } from 'react-router-dom';
import { sampleProducts } from '../data';
import { Product } from '../types/Product';
import axios from "axios"
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";

type State = {
  products: Product[],
  loading: boolean,
  error:string
}
type Action =
| { type: 'FETCH_REQUEST' }
| {
    type: 'FETCH_SUCCESS'
    payload: Product[]
  }
| { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
products: [],
loading: true,
error: '',
}

const reducer = (state: State, action: Action) => {
switch (action.type) {
  case 'FETCH_REQUEST':
    return { ...state, loading: true }
  case 'FETCH_SUCCESS':
    return { ...state, products: action.payload, loading: false }
  case 'FETCH_FAIL':
    return { ...state, loading: false, error: action.payload }
  default:
    return state
}
}
function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
  React.Reducer<State, Action>
    >(reducer, initialState)
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' })
        try {
          const result = await axios.get('/api/products')
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
        }
      }
      fetchData()
    }, [])

    return loading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((items) => {
          return (
            <Link to ={"/product/"+items.slug}>
          <div key={items.slug}>
            <img
              className="product-image"
              src={items.image}
              alt={items.name}
            />
            <h2>{items.name}</h2>
            <p className=" text-lg">${items.price}</p>
                  </div>
                  </Link>
        );
      })}
      </div>
   
  )
}

export default HomePage