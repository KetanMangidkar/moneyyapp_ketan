import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import { Fitness } from './pages/Fitness';
// import Care from './pages/Care';
import { Store } from './pages/Store';
import  Register from './components/Register.jsx';
import  LoginPage  from './components/Login.jsx';
import { Cart } from './components/Cart';
import { ProductDetails } from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/fitness" element={<Fitness></Fitness>}></Route>
        <Route path="/care" element={<Care></Care>}></Route> */}

        <Route path="/products" element={<Store/>}></Route>
        <Route
          path="/products/:_id"
          element={<ProductDetails></ProductDetails>}
        ></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
