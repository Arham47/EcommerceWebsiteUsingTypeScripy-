
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import ProductItem from "../component/ProductItems";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";


function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

    return isLoading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      ) : (
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <Helmet>
              <title>Ts Amazona</title>
            </Helmet>
      {products!.map((items) => {
          return (
          <ProductItem product={items}/>
        );
      })}
      </div>
   
  )
}

export default HomePage