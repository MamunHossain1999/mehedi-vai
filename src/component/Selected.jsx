

export default function  Selectec({previusResib, handleRemove, handleActive }) {
    //  console.log(handleRemove)
      return (
        <div>
                <div className="w-full md:w-10/12">
            {previusResib.map(resepe=>(
                        <div key={resepe} className="w-9/12 md:w-full border mt-3 items-center rounded-xl px-3 py-3 card bg-base-100 w-96 shadow-xl flex">
                        <figure>
                          <img className=" md:w-24 rounded-full"
                            src={resepe.player_img}
                            alt="Shoes" />
                        </figure>
                        <div className=" w-full card-body ml-36 ">
                          <h2 className="card-title">{resepe.player_name}</h2>
                          <h2>{resepe.batting_style}</h2> 
                        </div>
                        <div className=" w-full  flex card-actions justify-end">
                            <button onClick={()=>handleRemove(resepe.player_id)} className="btn text-white bg-lime-500">Delete Now</button>
                            
                        </div>
                      </div>
    
            ))}
        </div>
            <div><button onClick={()=>handleActive("cart")} className="btn border mt-6 bg-lime-500 text-white" >Add More Player</button>
            
            </div>
        </div>
      
      )
      
    }
    