import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/landingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/aboutus/aboutUs';
import Cookingclass from './pages/cookingClass/cookingClass';
import Services from './pages/services/services';

const Layout = () => {
  return(
    <div className='app'>
      <Header/>
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
        element:<Home/>
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/cooking-class",
        element:<Cookingclass/>
      },
      {
        path:"/services",
        element:<Services/>
      },
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
