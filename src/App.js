import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import LandingPage from '../src/pages/landing/landingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<div>Home Page</div>
      },
      {
        path:"/landing",
        element:<LandingPage/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
