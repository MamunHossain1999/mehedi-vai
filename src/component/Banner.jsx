
// import './Banner.css'
import bg from '..//assets/bg-shadow.png'
import banner from '..//assets/banner-main.png'


export default function Banner({handleClick }) {
  // console.log(handleClick)
  return (
    <div className='w-[340px] md:w-full mx-auto bg-slate-900 rounded-xl flex justify-center items-center pt-32' >
        <div className=''>
           <div className=' justify-center flex'>
                <img className='w-full md:w-80 items-center flex justify-center mx-auto ' src={banner} alt="Main banner" />
           </div>

           <div className='text-center mt-3'>
                <h2 className='text-white text-2xl text-center '>Assemble your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-400'>Beyond Boundaries Beyound Limits</p>
                <button onClick={handleClick} className='btn bg-lime-500 px-3 py-2 rounded-2xl border mt-4 mb-5'>Cleim Free Credit</button>
                
           </div>
        </div>       
                   
                
    
           
    </div>
  )
}
