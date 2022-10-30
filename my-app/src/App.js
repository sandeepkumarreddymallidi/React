import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home  from "./pages/Home";
import About  from "./pages/About";
import Products  from "./pages/Products";
import Error from "./pages/Error"
import ShareLayout from './pages/SharedLayout';
import Singleproduct from './pages/Singleproduct';
function App() {
  return (
    <div className="App">
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
