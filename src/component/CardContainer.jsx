import '../component/CardContainer.css'
import PropTypes from 'prop-types'
export default function CardContainer({handleActive, resipe, isActive }) {
   
  return (
    <div className='flex items-center justify-between py-10'>
        <h1 className='font-semibold text-2xl'>Available Players: {resipe.length}/6</h1>
        <div className="flex gap-4 toggle">
            <button onClick={()=>handleActive("cart")} className={`${isActive.cart? "btn active " : " btn "}`}>Aballable</button>
            <button onClick={()=>handleActive("about")} className={`${isActive.cart? " btn" : " active btn"}`}>Selected ({resipe.length})</button>
           
        </div>
       
     </div>    
        
    
  )
}
CardContainer.propTypes = {
  handleActive:PropTypes.func,
  
}