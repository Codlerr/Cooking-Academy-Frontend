import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from './pages/login/index';
import SignUp from './pages/signUp/index';
import Home from './pages/home/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/aboutus/index';
import Cookingclass from './pages/cookingClasses/index';
import CookingclassInside from './pages/cookingClassInside/index';
import Cookingclassone from './pages/cookingClass-1/index';
import KitchenStudio from './pages/kitchenStudio/index';
import Profile from './pages/profile/index';
import Cart from './pages/cart/index';

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
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
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
        path:"/cooking-class-inside",
        element:<CookingclassInside/>
      },
      {
        path:"/cooking-class-1",
        element:<Cookingclassone/>
      },
      {
        path:"/kitchen-studio",
        element:<KitchenStudio/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"*",
        element:<h1>Page Not Found</h1>
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
