import React from 'react'
import {BsFillBasketFill} from "react-icons/bs"
import {useSelector} from "react-redux"
function NavBar() {
    const {quantity} = useSelector((store)=>store.cart)
    return (
    <nav className='bg-blue-500 text-white  items-center'>
        <div className='flex container mx-auto py-6 justify-between'>
        <h3 className='text-3xl'>Kurslar</h3>
        <div className='pt-2'>
            <p className='absolute top-[8px] right-7 bg-white text-blue-500 px-2  rounded-full'>
                {quantity}
            </p>
            <BsFillBasketFill className='relative text-2xl'/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar