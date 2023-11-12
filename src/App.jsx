
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Home from './pages/Home';
import { ProductsData } from './api/api';
import Sign_in from './pages/Sign_in';
import Cart from './pages/Cart';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} loader={ProductsData}></Route>
      <Route path="/signIn" element={<Sign_in />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route >
  ));
  return (
    <>
      <div className="font-bodyFont bg-gray-100 ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
