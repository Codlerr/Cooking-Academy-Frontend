import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/landingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        element:<div>about Page</div>
      },
      {
        path:"/cooking-class",
        element:<div>cooking Page</div>
      },
      {
        path:"/services",
        element:<div>service Page</div>
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
