
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import { ProductsData } from './api/api';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} loader={ProductsData}></Route>
    </Route>
  ));
  return (
    <>
      <div className="font-body">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
