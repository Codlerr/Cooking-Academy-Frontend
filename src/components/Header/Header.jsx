import {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import '../Header/Header.css';
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg'
let Logo2 ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_2x_jvrg8j.png'
let Menu = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669970200/Cooking%20Academy%20Assets/menu-100_fphqfd.png';
function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false);


    // custom hide
    const { pathname } = useLocation();
    if (pathname === "/login") return null;
    if (pathname === "/signup") return null;

    const navWithOpacity = location.pathname !== '/'  ? 'withOpacity' : ""
    const navWithOpacity2 = location.pathname !== '/profile'  ? 'withOpacity' : ""
    const navWithOpacityCart = location.pathname !== '/cart'  ? 'withOpacity3' : ""
    
  return (
    <>
    <nav className={`bg-black border-b-2 border-[#383838] ${navWithOpacity,navWithOpacity2,navWithOpacityCart}`}>
      <div className='w-11/12 mx-auto lg:flex justify-between pt-8 pb-3'>
          <div className='flex justify-between'>
            <a href="/"><img src={Logo} className='h-12 md:h-20'></img></a>
            {/* menu */}
            <i onClick={() => setOpen(!open)} class={`${open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} xs:text-3xl md:text-4xl md:pt-5 xs:block lg:hidden grid place-items-center`}></i>
          </div>
          <div className=''>
            <ul className={`${open ? "block " : "xs:hidden lg:flex"} flex xs:flex-col  lg:flex-row  xs:gap-10 xs:pt-5 lg:gap-10 text-[#ffffffcc] font-medium tracking-wide`}>
              <li><NavLink exact to="/" >Home</NavLink></li>
              <li><NavLink to="/about-us" >About Us</NavLink></li>
              <li><NavLink to="/cooking-class" >Cooking Class</NavLink></li>
              <li><NavLink to="/kitchen-studio" >Kitchen Studio</NavLink></li>
              <li className='xs:hidden lg:block'><i class="fa-solid fa-magnifying-glass text-xl"></i></li>
              <li className=''><NavLink to="/profile" ><img src={Logo2} className='h-14 rounded-full'></img></NavLink></li>
            
            </ul>
          </div>
         
          
      </div>
    </nav>
    </>
  )
}

export default Navbar;