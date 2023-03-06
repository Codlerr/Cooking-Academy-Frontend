import React, {useState} from 'react'

let p1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/vadim-markin-Dn82UF7qsso-unsplash_u9zgzm.jpg';
let p2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/nordwood-themes-wtevVfGYwnM-unsplash_wtwkjh.jpg';
let p3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/pexels-mister-mister-3434523_bj7xu1.jpg';
let p4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099282/Cooking%20Academy%20Assets/Login-Signup/pexels-rajesh-tp-1633525_xmjtun.jpg';
let logo = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671101445/Cooking%20Academy%20Assets/Login-Signup/Layer_2_tzsagt.svg';

function SignUp() {

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    // handle toggle 
    const toggle1 = () =>{
        setOpen1(!open1)
    }
    const toggle2 = () =>{
        setOpen2(!open2)
    }
  return (
    <>
    <section className='h-screen w-full grid place-items-center'>
        <div className='lg:h-[80vh] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-6'>
            <img className='xs:hidden lg:block w-full h-full' src={p1} alt="img" />
            <img className='xs:hidden lg:block w-full h-full' src={p2} alt="img" />
            <div className='col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center  md:justify-start md:mt-5 2xl:mt-20 h-full'>
                <div className='grid place-items-center'>
                    <img className='xs:h-fit md:h-14 xl:h-20 ' src={logo} alt="logo" />
                </div>
                <p className='text-primary-clr2 py-5'>Alrady an user?<a className='pl-5 text-text-dark' href="/login">Sign In</a></p>
                <form className='flex flex-col xs:gap-4 md:gap-3 xl:gap-2 justify-center' action="">
                    <input className='bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 py-1 xl:py-1 rounded-lg' type="text" placeholder='Full Name*' required/>
                    <input className='bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 py-1 xl:py-1 rounded-lg' type="email" placeholder='Email*' required/>
                    <div className='relative'>
                        <input className='bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 py-1 xl:py-1 rounded-lg' type={(open1 === false)? 'password' :'text'} placeholder='Password*' required/>
                            <div className='absolute xs:top-2 md:top-2 xl:top-2 right-5'>
                                { (open1 === false)? <i class="fa-solid fa-eye" onClick={toggle1}></i> : <i class="fa-solid fa-eye-slash" onClick={toggle1}></i> }
                            </div>
                    </div>
                    <div className='relative'>
                        <input className='bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 py-1 xl:py-1 rounded-lg' type={(open2 === false)? 'password' :'text'} placeholder='Confirm password*' required/>
                            <div className='absolute xs:top-2 md:top-2 xl:top-2 right-5'>
                            { (open2 === false)? <i class="fa-solid fa-eye" onClick={toggle2}></i> : <i class="fa-solid fa-eye-slash" onClick={toggle2}></i> }
                            </div>
                    </div>
                    <p className='text-text-dark xs:text-xs md:text-[10px] xl:text-xs text-center md:w-[80%] mx-auto py-2'>By creating an account you agrre to our Terms of Service and Privacy Policy</p>
                    <button type='submit' className='bg-primary-dark hover:bg-primary-clr1 md:py-0 xl:py-1 transition-all duration-200 rounded-md'>Sign Up</button>
                </form>
                <p className='text-xs text-text-dark text-center py-5'>or sign up using</p>
                <div className='flex gap-4 justify-center'>
                    <i class="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-google"></i>
                    <i class="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-facebook"></i>
                    <i class="text-primary-clr1 hover:text-white transition-all duration-200 text-3xl fa-brands fa-apple"></i>
                </div>
            </div>
            <img className='xs:hidden lg:block w-full h-full' src={p3} alt="img" />
            <img className='xs:hidden lg:block w-full h-full' src={p4} alt="img" />
        </div>
    </section>
    </>
  )
}

export default SignUp