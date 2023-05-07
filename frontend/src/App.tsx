import { useState } from "react";

import { sampleProducts } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <header>
        <div className="flex justify-between  bg-slate-950 w-full h-16">
          <div className="">
            <h2 className="text-white pt-4 ml-5">Ts Amazona</h2>
          </div>
          <div className="flex mr-4">
            <div className=" bg-slate-950 w-full h-16">
              <h2 className="text-white pt-4 ml-5"><a href="cart">Cart</a></h2>
            </div>
            <div className=" bg-slate-950 w-full h-16">
              <h2 className="text-white pt-4 ml-5 whitespace-nowrap">
                {" "}
               <a href="signin"> Sign in</a>
              </h2>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <div className=" mt-4 px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sampleProducts.map((items) => {
            return (
              <div key={items.slug}>
                <img
                  className="product-image"
                  src={items.image}
                  alt={items.name}
                />
                <h2>{items.name}</h2>
                <p className=" text-lg">${items.price}</p>
              </div>
            );
          })}
          </div>
          </div>
      </main>

      <footer>
        <div className=" text-center">
        All right reserved 
        </div>
      </footer>
    </div>
  );
}

export default App;
