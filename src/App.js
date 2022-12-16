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
import Cookingclassone from './pages/cookingClass-1/index';
import KitchenStudio from './pages/kitchenStudio/index';
import Services from './pages/services/index';
import Profile from './pages/profile/index';

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
        path:"/cooking-class-1",
        element:<Cookingclassone/>
      },
      {
        path:"/kitchen-studio",
        element:<KitchenStudio/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/profile",
        element:<Profile/>
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
