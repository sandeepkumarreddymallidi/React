// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home  from "./pages/Home";
import About  from "./pages/About";
import Products  from "./pages/Products";
import Error from "./pages/Error"
import ShareLayout from './pages/SharedLayout';
import Singleproduct from './pages/Singleproduct';

import Table from './apisetup/Table';
import Sample from './apisetup/Sample';
import UsingFetch from './apisetup/UsingFetch';
import AppRouting from './routing/AppRouting';
import Counter from './lifeCycle.js/Counter';
import LocalStorage from './LocalStorage.js/LocalStorage';
import Usecontext from './Hooks/usecontext';
import Header from './navbar/Header';
import Navbar from './navbar/Navbar';
function App() {
   return (
     <div className="App">
      {/* <Navbar/> */}
      {/* <Header/> */}
      {/* <Usecontext/> */}
      {/* <LocalStorage/> */}
      {/* <Counter/> */}
      {/* <AppRouting/> */}
      {/* <Sample/> */}
            {/* <UsingFetch/> */}
      {/* <EmployeeExample/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShareLayout></ShareLayout>}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productid' element={<Singleproduct />}></Route>

            <Route path='/*' element={<Error />} />
          </Route>

        </Routes>
      </BrowserRouter>
     </div>
  );
}
export default App; 

// export default function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setProducts(json));
//   }, []);
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Product Image",
//         Cell: ({ row }) => {
//           return (
//             <img
//               class="img-fluid img-rounded"
//               width={200}
//               src={row.original.image}
//             />
//           );
//         }
//       },
//       {
//         Header: "Product Title",
//         accessor: "title" // accessor is the "key" in the data
//       },
//       {
//         Header: "Product Price",
//         accessor: "price"
//       },
//       {
//         Header: "Product Description",
//         accessor: "description"
//       }
//     ],
//     []
//   );
//   return (
//     <div className="App">
//       <h1>Example of React table with FakeStore API</h1>
//       <Table columns={columns} data={products} />
//     </div>
//   );
// }