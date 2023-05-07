
import { Link } from 'react-router-dom';
import { sampleProducts } from '../data';

function HomePage() {
  return (

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {sampleProducts.map((items) => {
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