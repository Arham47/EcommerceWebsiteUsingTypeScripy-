import { useState ,useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { Store } from './Store'

function App() {
 
  const {

    state: { mode, cart },
    dispatch,
  } = useContext(Store)

  return (
    <div className="flex flex-col h-full">
      <header>
        <div className="flex justify-between  bg-slate-950 w-full h-16">
          <div className="">
            <h2 className="text-white pt-4 ml-5">Ts Amazona</h2>
          </div>
          <div className="flex mr-4">
            <div className=" bg-slate-950 w-full h-16">
              <h2 className="text-white pt-4 ml-5"><Link to="cart">Cart{ cart.cartItems.length > 0 && (
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 ml-2 dark:text-white">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                   
                  )}</Link></h2>
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
          <Outlet />
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
