import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import SignUp from './pages/signUp/signUp';
import Home from './pages/home/landingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/aboutus/aboutUs';
import Cookingclass from './pages/cookingClass/cookingClass';
import KitchenStudio from './pages/kitchenStudio/kitchenStudio';
import Services from './pages/services/services';
import Profile from './pages/profile/Profile';

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
