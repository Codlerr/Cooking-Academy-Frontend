
let Banner = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674205341/Cooking%20Academy%20Assets/consult_sfal4y.jpg';
let img2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674206112/Cooking%20Academy%20Assets/how_vq2f8c.jpg';
let img3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674294743/Cooking%20Academy%20Assets/rest_tp7a4n.jpg';

function MenuConsultancy() {
  return (
    <>
    <section className='w-11/12 mx-auto overflow-hidden'>
        {/* banner */}
        <div className='my-2 overflow-hidden'>
            <img className='w-[100%] h-fit  object-cover hover:scale-105 transition-all duration-700 cursor-pointer' src={Banner} alt="banner" />

            <div className='md:w-[70%] mx-auto text-center'>
                <h1 className='xs:text-2xl md:text-4xl tracking-wider xs:pt-10 md:pt-16 pb-2'>RESTAURANT MENU CONSULTANCY</h1>
                <p className='xs:text-base md:text-xl leading-loose'>Our highly talented development chefs and food product development experts will create the ideal, on-trend menu that is specially designed to fit your brand and kitchen.</p>
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
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>Initial menu development writing workshop, get all your ideas on paper and look for balance, style, price point & sense check against the brief. Agree a basic menu then initial a first tasting, trialling dishes is key to menu development.</p>
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>Once a menu is tested, create the collateral, menu cards, training packs, recipe cards with complete weights & allergen data. Initiate a training programme to help your staff implement the new menu. Pre & post menu launch support, we are here to help you succeed, and that should be from day one.</p>
                </div>
            </div>
            <div className='md:w-[90%] lg:w-[70%] mx-auto text-center'>
                    <h1 className='xs:text-2xl md:text-4xl tracking-wider pt-16 pb-2'>MENU DESIGN – RESTAURANT STRATEGY</h1>
                    <p className='xs:text-base md:text-xl leading-loose'>We have a range of great content we continue to develop specifically around restaurant strategy and insight. The content aims to provide helpful information around subjects and topics which we continually get asked time and time again.  We cover in more depth things like, Opening a Restaurant, Training Restaurant Staff and even Costing a Menu.</p>
            </div>
        </div>

        
    </section>
    <section>
      {/* concept creation */}

      <div className="bg-primary-clr2 xs:py-10  md:py-14">
          <div className="text-center  flex flex-col gap-4">
            <h1 className="xs:text-2xl md:text-4xl  tracking-wider">NEW CONCEPT CREATION</h1>
            <h3 className="xs:text-base md:text-2xl  font-light">Turning your vision into a successful reality.</h3>
          </div>
          <div className="xs:w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
            <div className="flex flex-col justify-center xs:gap-5 lg:gap-7">
                 <h1 className="xs:text-2xl md:text-3xl text-center lg:text-left font-normal">Helping you to deliver a market leading
                  new restaurant, fast food concept or cafe</h1>

                <p className="leading-loose xs:text-base md:text-xl text-center lg:text-left font-normal">We have designed this structured process based on our experience
                in creating and developing hospitality concepts for industry leading
                brands. This service is for those who are looking for an end-to-end
                new concept creation service.</p>
            </div>
            <div className="overflow-hidden">
              <img className="w-[100%] object-cover hover:scale-105 transition-all duration-700 cursor-pointer" src={img3} alt="concept image" />
            </div>
          </div>
      </div>

      {/* Process */}
      <div className="bg-[#313030] border-b-2 border-[#5e5a5ac0] xs:py-10  md:py-14">
          <div className="text-center">
                <h1 className="xs:text-2xl md:text-3xl  tracking-wider">OUR PROCESS</h1>          
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10 pt-10">
              <div className="flex flex-col gap-2 border-t-2 border-[#ffffff46] relative ">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">1</h3>
                <h3 className="pt-10 text-lg font-semibold">CONCEPT DEFINITION & OPERATIONAL PLANNING</h3>
                <p className="text-base font-semibold">Objective:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                <p>Defining the concept vision and operational
                framework. A series of creative workshops to build on
                the initial idea, defining the overall concept, food &
                drink vision and operational model.</p>
                <p>During this stage, we research local competition and
                industry benchmarks, create a trends review and
                organise an inspirational food tour, We can also create
                a P&L revenue forecast based on the operational and
                labour model.</p>
                <p>The outputs are a concept and menu vision,
                operational plan and kitchen equipment schedule.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-t-2 border-[#ffffff46] relative">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">2</h3>
                <h3 className="pt-10 text-lg font-semibold">CONCEPT, PRODUCT & RECIPE DEVELOPMENT</h3>
                <p className="text-base font-semibold">Objective:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                <p>Development of the food and drink proposition with full
                  supply chain, costings, crockery and packaging range
                  recommendations.</p>
                <p>Concept development support and input on BOH and
                    FOH designs.</p>
                 <p>The outputs at this stage full signoff on all dishes and
                  menus. Kitchen design is finalized.</p>
                  </div>
              </div>
              <div className="flex flex-col gap-2 xs:border-t-2 lg:border-t-0 border-[#ffffff46]  relative">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">3</h3>
                <h3 className="pt-10 text-lg font-semibold">TRAINING & LAUNCH SUPPORT</h3>
                <p className="text-base font-semibold">Objective:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                <p>To support you with a successful launch — product
                  recipe and 'how to' manuals created, menu
                  photography support, team training and guidance over
                  soft and full launch.</p>
                <p>During the training programme, we'll host training
                    sessions for Front-of-House and kitchen teams to fully
                    embed the training. We're with your team on-site and
                    hand over the operational knowledge to the team.</p>
                <p>Post launch review - a review of performance and to
                  ensure training has been fully embedded in the team.</p>
                  </div>
              </div>
          </div>
      </div>

      

      {/* BOOK A CONSULTATION */}
      <div className="bg-[#313030] py-8 flex gap-5 flex-col justify-center items-center">
        <h1 className="xs:text-2xl md:text-3xl font-light tracking-wider">BOOK A CONSULTATION</h1>
        <h3 className="xs:text-base md:text-2xl xs:w-[95%] lg:w-[40%] text-center font-light">We offer all new clients a FREE consultation to discuss any new or existing projects.</h3>
        <div className="flex gap-4">
          <a href="tel:+97433242999" className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">CALL US</a>
          <a className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">BOOK CONSULTATION</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default MenuConsultancy