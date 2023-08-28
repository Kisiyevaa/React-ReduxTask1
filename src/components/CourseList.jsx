import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import CourseItems from './CourseItems'
import {clearCart} from "../control/cartSlice"

function CourseList() {
    const dispatch=useDispatch()
    const {cartItems,quantity,total} = useSelector((store)=>store.cart)
  return (
    <div className='text-center container mx-auto py-10'>
    {
        quantity<1 ?
        (
            <section>
                <header>
                    <h2 className='text-2xl font-medium'>Proqramlaşdırma dilləri</h2>
                    <h4>Sebet Bosdur</h4>
                </header>
            </section>
        )
        :
        (
            <section>
                <header>
                    <h2 className='text-2xl font-medium'>Proqramlaşdırma dilləri</h2>
                </header>
                <div>
                    {cartItems.map((item)=>{
                        return <CourseItems {...item}/>
                    })}
                </div>
            </section> 
        )
    }
    <footer>
        <hr />
        <div>
            <h4 className='text-2xl font-medium'>Toplam qiymət <span>{total} $</span></h4>
        </div>
        <button className='bg-blue-500 px-2 py-1 rounded text-xl my-5' onClick={()=>dispatch(clearCart())}>Təmizlə</button>
    </footer>
    <div>
    </div>
    </div>
  )
}

export default CourseList