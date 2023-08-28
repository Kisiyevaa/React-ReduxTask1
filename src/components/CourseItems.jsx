import React from 'react'
import {useDispatch} from "react-redux"
import {removeItem,increase,decrease} from "../control/cartSlice"

function CourseItem({id,title,prices,img,quantity}) {
    const dispatch=useDispatch()
  return (
    <div className='flex container mx-auto justify-between'>
       <img src={img} alt="img" className='w-[50%] py-10'/>
        <div className='py-10'>
            <h2 className='text-3xl font-medium italic'>{title}</h2>
            <h2 className='text-2xl font-medium'>{prices}$</h2>
            <div>
                <button className='text-3xl bg-amber-500 px-2 pb-1 my-2'
                onClick={()=>dispatch(increase(id))}
                >
                    +
                </button>
                <p>
                    {quantity}
                </p>
                <button className='bg-sky-300 text-3xl px-3 pb-1 my-2'
                 onClick={()=>dispatch(decrease(id))}
                >-</button>

            </div>
            <button className='bg-red-500 px-4 py-1 text-white text-2xl' onClick={()=>dispatch(removeItem(id))}>sil</button>
        </div>
    </div>
  )
}

export default CourseItem