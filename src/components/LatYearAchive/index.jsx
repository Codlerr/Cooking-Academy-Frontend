import CountUp from 'react-countup';
import './styles.css';


export default function lsa(props) {
  return (
    <>
      <div data-aos="fade-right">
        <h2 className='text-center font-bold xs:text-4xl md:text-5xl text-[color:var(--thm-clr2)] pt-5 pb-3'>Last year achievement</h2>
        {/* <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>we are a culinary startup based in qatar with the aim of bringing people together, to learn and enjoy the art of cooking.</p> */}
      </div>

      <div data-aos="fade-right" className='md:w-10/12 mx-auto md:pt-5 grid grid-cols-1 md:grid-cols-4 xs:gap-5 md:gap-0 place-items-center text-[color:var(--thm-clr2)] py-2'>
        <div className='grid place-items-center'>
          <h4 className='xs:text-4xl lg:text-7xl'>+<CountUp start={0} end={25} /></h4>
          <p className='capitalize'>Partners</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-4xl lg:text-7xl'>+<CountUp start={0} end={50}/></h4>
          <p className='capitalize'>Workshop</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-4xl lg:text-7xl'>+<CountUp start={0} end={3}/></h4>
          <p className='capitalize'>awards</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-4xl lg:text-7xl'>+<CountUp start={0} end={150}/></h4>
          <p className='capitalize'>cooking class</p>
        </div>

      </div></>
  )
}
