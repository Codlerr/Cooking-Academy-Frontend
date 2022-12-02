import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../Header/Header.css';
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg'
let Logo2 ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_2x_jvrg8j.png'
let Menu = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669970200/Cooking%20Academy%20Assets/menu-100_fphqfd.png';
function Navbar() {
    
    const [open, setOpen] = useState(false);
  return (
    <>
    <nav className=' bg-black border-b-2 border-[#383838]'>
      <div className='w-11/12 mx-auto lg:flex justify-between pt-8 pb-3'>
          <div className='flex justify-between'>
            <img src={Logo} className='h-12 md:h-20'></img>
            {/* menu */}
            <i onClick={() => setOpen(!open)} class={`${open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} text-3xl xs:block lg:hidden grid place-items-center`}></i>
          </div>
          <div className=''>
            <ul className={`${open ? "block " : "xs:hidden lg:flex"} flex xs:flex-col  lg:flex-row xs:gap-8 xs:pt-5 lg:gap-10 text-[#ffffffcc] font-medium tracking-wide`}>
              <li><NavLink exact to="/" >Home</NavLink></li>
              <li><NavLink to="/about-us" >About Us</NavLink></li>
              <li><NavLink to="/cooking-class" >Cooking Class</NavLink></li>
              <li><NavLink to="/services" >Services</NavLink></li>
              <li className='xs:hidden lg:block'><i class="fa-solid fa-magnifying-glass text-xl"></i></li>
              <li className='xs:hidden lg:block'><img src={Logo2} className='h-14 rounded-full '></img></li>
            
            </ul>
          </div>
         
          
      </div>
    </nav>
    </>
  )
}

export default Navbar;