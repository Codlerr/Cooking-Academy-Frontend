import './App.css';
import {ToastContainer, toast} from 'react-toastify'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {withReduxProvider} from './redux/store'
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
import Success from './pages/success/success';


import AdminLogin from './Admin/Pages/login';
import FAQ from './Admin/Pages/Faq';
import Email from './Admin/Pages/Email';
import CourseDetail from './Admin/Pages/Course Details';
import ClassDetail from './Admin/Pages/Class Details';
import ClassDetailInner from './Admin/Pages/Class Detail Inner';
import ClassInnerEdit from './Admin/Pages/Class Detail Inner Edit';
import CourseEdit from './Admin/Pages/Course Details Edit';

import useInitializeApp from './hooks/useInitializeApp';
import ClassInnerDetails from './Admin/Pages/Class Detail Inner';

const Layout = () => {
  return(
    <div className='app'>
      <Header/>
      <Outlet/>
      <ToastContainer/>
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
        path:"/cooking-class/:name",
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
        path:"/success",
        element:<Success/>
      },
      {
        path:"*",
        element:<div className='h-[80vh] grid place-items-center'><h1>Page Not Found</h1></div>
      },
      {
        path:"/admin/login",
        element:<AdminLogin/>
      },
      {
        path:"/admin/faq",
        element:<FAQ/>
      },
      {
        path:"/admin/email",
        element:<Email/>
      },
      {
        path:"/admin/class-details",
        element:<ClassDetail/>
      },
      {
        path:"/admin/course-details",
        element:<CourseDetail/>
      },
      {
        path:"/admin/course-edit/:id",
        element:<CourseEdit/>
      },
      {
        path:"/admin/class-edit/:id/:courseId",
        element:<ClassInnerEdit/>
      },
      {
        path:"/admin/class/:id",
        element:<ClassDetailInner/>
      },
    ]
  }
]);



function App() {
  useInitializeApp();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default withReduxProvider(App);