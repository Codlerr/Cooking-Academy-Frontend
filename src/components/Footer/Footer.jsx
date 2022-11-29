import {Link} from 'react-router-dom';
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg';




function Footer() {

  return (
    <>
    <section className='bg-[#000000f6] py-10'>
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-10 bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669628048/Cooking%20Academy%20Assets/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_dhixjz.webp)] text-[#ffffffdc] border-[#CBA135] md:border-t-2 md:border-b-2'>
          
          <div className='lg:py-10 '>
            <img className='' src={Logo}></img>
            <p className='pt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure, nulla soluta repudiandae non odio quia reprehenderit inventore corporis rem repellendus ullam culpa quo suscipit veniam laboriosam minima nobis obcaecati.</p>
          </div>
          <div className='lg:py-10 grid place-items-center'>
              <ul className='flex flex-col gap-5 '>
                <li className='hover:text-[#CBA135]'><Link exact to='/'>Home</Link></li>
                <li className='hover:text-[#CBA135]'><Link to='/about-us'>About Us</Link></li>
                <li className='hover:text-[#CBA135]'><Link to=''>Our Program</Link></li>
                <li className='hover:text-[#CBA135]'><Link to=''>Corporate</Link></li>
              </ul>
          </div>
          <div className='lg:py-10 grid place-items-center'>
              <ul className='flex flex-col gap-5 hover:text-[]'>
                <li className='hover:text-[#CBA135]'><Link to=''>Kitchen</Link></li>
                <li className='hover:text-[#CBA135]'><Link to=''>Contact us</Link></li>
              </ul>
          </div>
          <div className='lg:py-10 text-base font-semibold flex flex-col justify-center gap-10'>
              <div>
                  <p>GET IN TOUCH</p>
                  <a href='#'>+974 5004 7555</a>
                  <p>Email:<a href='#'>Info@cookingacademy.qa</a></p>
              </div>
              <div>
                  <p>the cooking academy</p>
                  <p>Street 978 - zone 31 - building 30 and 32</p>
                  <p>Umm Lekhba. Doha</p>
              </div>
          </div>
        </div>

        <div className='w-10/12 mx-auto flex flex-wrap justify-between text-white pt-10'>
            <div><p>All Right Reserved.</p></div>
            <div className='flex gap-5'>
              <a href='#'><i class="fa-brands fa-facebook text-xl"></i></a>
              <a href='#'><i class="fa-brands fa-twitter text-xl"></i></a>
              <a href='#'><i class="fa-brands fa-linkedin-in text-xl"></i></a>
            </div>
            <div>
              <p><a href='#'>Terms of Use</a> | <a href='#'>Privacy Policy</a></p>
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Footer;