
let Banner = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674205341/Cooking%20Academy%20Assets/consult_sfal4y.jpg';
let img2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674206112/Cooking%20Academy%20Assets/how_vq2f8c.jpg';

function MenuConsultancy() {
  return (
    <>
    <section className='w-11/12 mx-auto overflow-hidden'>
        {/* banner */}
        <div className='my-2 overflow-hidden'>
            <img className='w-[100%] h-fit  object-cover hover:scale-105 transition-all duration-700 cursor-pointer' src={Banner} alt="banner" />

            <div className='md:w-[70%] mx-auto text-center'>
                <h1 className='xs:text-2xl md:text-4xl tracking-wider xs:pt-10 md:pt-16 pb-2'>RESTAURANT MENU CONSULTANCY</h1>
                <p className='xs:text-base md:text-xl leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Perferendis cumque, adipisci accusantium eius sint tenetur natus fugiat inventore</p>
            </div>
        </div>

        {/* how we do this */}
        <div className='xs:py-10 md:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='overflow-hidden'>
                  <img className='w-[100%] object-cover hover:scale-105 transition-all duration-700 cursor-pointer' src={img2} alt="how do image" />
                </div>
                <div className='bg-primary-clr2 w-[100%] flex flex-col gap-4 justify-center items-center text-center xs:p-5 md:p-10'>
                    <h1 className='xs:text-2xl md:text-4xl font-light'>HOW WE DO THIS</h1>
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque vel sit minima nesciunt deserunt, eos molestiae temporibus impedit fuga, modi assumenda. Quasi quae sint consequuntur laudantium? Optio itaque deleniti consequatur odit quis accusantium excepturi. Eaque adipisci at ut cumque nulla!</p>
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque vel sit minima nesciunt deserunt, eos molestiae temporibus impedit fuga, modi assumenda. Quasi quae sint consequuntur laudantium? Optio itaque deleniti consequatur odit quis accusantium excepturi. Eaque adipisci at ut cumque nulla!</p>
                </div>
            </div>
            <div className='md:w-[90%] lg:w-[70%] mx-auto text-center'>
                    <h1 className='xs:text-2xl md:text-4xl tracking-wider pt-16 pb-2'>MENU DESIGN – RESTAURANT STRATEGY</h1>
                    <p className='xs:text-base md:text-xl leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam facilis laborum animi dolorem obcaecati ullam placeat facere omnis quibusdam officia, commodi blanditiis aut tempora error officiis eveniet ut, amet corporis sunt itaque. Ut blanditiis non dolorem modi tempore rerum.</p>
            </div>
        </div>

        
    </section>
    <section>
      {/* BOOK A CONSULTATION */}
      <div className="bg-[#313030] py-8 flex gap-5 flex-col justify-center items-center">
        <h1 className="xs:text-2xl md:text-3xl font-light tracking-wider">BOOK A CONSULTATION</h1>
        <h3 className="xs:text-base md:text-2xl xs:w-[95%] lg:w-[40%] text-center font-light">We offer all new clients a FREE consultation to discuss any new or existing projects.</h3>
        <div className="flex gap-4">
          <a className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">CALL US</a>
          <a className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">BOOK CONSULTATION</a>
        </div>
      </div>

      {/* WHAT IS A RESTAURANT CONSULTANT? */}
      <div className="bg-primary-clr2 xs:py-10 md:py-14 ">
        <div className="text-center xs:w-[90%] md:w-[80%] flex gap-5 flex-col justify-center items-center mx-auto">
          <h1 className="xs:text-2xl md:text-3xl font-light tracking-wider">WHAT IS A RESTAURANT CONSULTANT?</h1>
          <p className="leading-loose xs:text-base md:text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minus exercitationem laborum sequi, nisi quia culpa quo accusamus distinctio ab. Deserunt, nemo eos? Aliquid tempore cumque quia minus at porro illo ut voluptates veniam beatae. Deserunt, nemo eos? Aliquid tempore cumque quia minus at porro illo ut voluptates veniam beatae.</p>
          <p className="leading-loose xs:text-base md:text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minus exercitationem laborum sequi, nisi quia culpa quo accusamus distinctio ab. Deserunt, nemo eos? Aliquid tempore cumque quia minus at porro illo ut voluptates veniam beatae. Deserunt, nemo eos? Aliquid tempore cumque quia minus at porro illo ut voluptates veniam beatae.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default MenuConsultancy