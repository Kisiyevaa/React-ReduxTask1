import React from 'react'
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import { useEffect } from 'react'
import { calculateTotal } from './control/cartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const dispatch=useDispatch()

  useEffect(()=>{
     dispatch(calculateTotal())
  },[cartItems])
  return (

    <div>
      <NavBar/>
      <CourseList/>
    </div>
  )
}

export default App