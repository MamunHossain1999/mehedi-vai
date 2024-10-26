
import { HiMiniUser } from "react-icons/hi2";
import { IoFlag } from "react-icons/io5";


export default function AllPlayer({allPlayer, handleAdd, }) {

    
  return (
    <div className=" mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-8xl px-4 sm:px-6 lg:px-8 ">
          {allPlayer.map(resip=> (
              <div key={resip.player_id} className="card bg-base-100 w-64 md:w-96 mx-auto shadow-xl rounded-lg border">
              <figure className='px-2 py-3  rounded-xl '>
                <img className='px-3 py-3 rounded-2xl w-full md:w-96 h-72  '
                  src={resip.player_img}
                  alt="Shoes" />
              </figure>
              <div className="card-body w-full md:w-10/12 mx-auto">
              <div className="flex items-center px-3 ">
                <div className="text-2xl mr-3">< HiMiniUser/></div>
                <p className='text-2xl font-semibold '>{resip.player_name}</p>
              </div>

              <div className="mt-4 flex justify-between px-3  ">
                <div className="flex items-center ">
                    <p><IoFlag /></p>
                    <p className="ml-3 text-gray-400">{resip.country}</p>
                </div>
                
                <button className=" px-3 py-2 border rounded-xl bg-slate-200 pl-3">All-Rounder</button>
              </div>
              <p className="border-b-2 mx-2 mt-3"></p>
              <div className="px-3">{resip.rating}</div>

              <div className="flex px-3 justify-between mt-2">
                <h2>batting_style</h2>
                <h2 className="text-gray-400">{resip.batting_style}</h2>
              </div>  

              <div className='  flex px-3 items-center mt-3 mb-3'>
                <p>price: ${resip.price}</p>
                <button onClick={()=>handleAdd(resip)} className="border ml-24 rounded-lg px-3 py-2 hover:bg-lime-400">Choose Player</button>
              
                
              </div>
              </div>
            </div>
          ))}
        </div>
    </div>
   
  )
}
