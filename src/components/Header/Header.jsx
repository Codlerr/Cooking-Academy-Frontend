import {NavLink} from 'react-router-dom';
import '../Header/Header.css';
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg'
let Logo2 ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_2x_jvrg8j.png'

function Navbar() {
    

  return (
    <>
    <nav className=' bg-black border-b-2 border-[#383838]'>
      <div className='w-11/12 mx-auto flex justify-between pt-8 pb-3 '>
          <div>
            <img src={Logo} className='h-16 md:h-20'></img>
          </div>
          <div className='grid place-items-center hidden md:block'>
            <ul className='flex  gap-10 text-[#ffffffcc] font-medium tracking-wide'>
              <li><NavLink exact to="/" >Home</NavLink></li>
              <li><NavLink to="/about-us" >About Us</NavLink></li>
              <li><NavLink to="/cooking-class" >Cooking Class</NavLink></li>
              <li><NavLink to="/services" >Services</NavLink></li>
              <li><i class="fa-solid fa-magnifying-glass text-xl"></i></li>
              <li><img src={Logo2} className='h-14 rounded-full bg-yellow-300'></img></li>
            
            </ul>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;