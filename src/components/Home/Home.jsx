
import { useEffect } from "react";
import { useState } from "react";
import Cart from '../Cart/Cart'
import {  BiBookOpen } from 'react-icons/bi'
import toast from "react-hot-toast";

const Home = () => {
   const[allCourse, setAllCourse] = useState([])
   const [selectedCourse, setselectedCourse] = useState([])
   const[remaining, setRemaining] = useState(20)
   const [totalCredit , setTotalCredit] = useState(0)
   const [totalPrice, setTotalPrice] = useState(0)
   
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id);
        // console.log(isExist)
        
       if (isExist){
        return toast.error('This course Already slected');
       } else{
        let count = course.credit_hr;
        let totalCr = course.credit_hr;
        let priceSum = course.price;
        selectedCourse.forEach(item => {
            count = count +  item.credit_hr;
            totalCr = totalCr + item.credit_hr;
            priceSum = priceSum + item.price;
        }
        )
        const totalRemaining = 20 - count
        if(count > 20){
           return toast.error('Limited credit hour');
        }else{
            setTotalCredit(totalCr)
            setRemaining(totalRemaining)
            setselectedCourse([...selectedCourse, course])
            setTotalPrice(priceSum)

        }
    }
       
    }
    // console.log(selectedCourse)
//    console.log(allCourse)

    return (
    <div className="flex gap-2  md:flex-row flex-col pb-5   justify-center">

        <div className=" grid md:w-3/4 grid-cols-1 md:grid-cols-3 mx-auto gap-4">
           
           {
            allCourse.map((course) =>(
                
                <div key={course.id} className=" mb-5 card rounded-md bg-base-100 mx-auto shadow-xl  ">
          <div className="card-body  items-center text-center ">
          
          <div className="px-5 pt-5">
          <img className="w-full"  src={course.cover_image} alt="" />
          </div>
          
          <div className="justify-start items-start text-left px-5 ">
          <h2 className="mt-2 mb-2 text-lg font-bold">{course.course_title}</h2>
          <p className="text-sm mb-2 h-[75px] text-[#1C1B1B99]">{course.course_details}</p>
          <div className="flex  justify-between gap-5">
              <h3 className="text-lg"><span className="font-bold">$ </span>Price:{course.price}</h3>
            <BiBookOpen className="text-2xl"></BiBookOpen>
              <h3>Credit:{course.credit_hr}hr</h3>
          </div>
          
          </div>

          </div>

         <div className="pt-5 px-5">
         <button onClick={()=>handleSelectCourse(course)} className="btn text-lg text-white  rounded-lg w-full mb-5  h-[40px]  mx-auto bg-sky-600">Select</button>
         </div>
         </div>
            
            ))
           }
          
            </div>
            <div className="cart mx-auto  md:w-1/4">
            <Cart selectedCourse={selectedCourse} 
            remaining ={remaining}
            totalCredit={totalCredit}
            totalPrice={totalPrice}>

            </Cart>
        </div>
           
            </div>
            
            );
};

export default Home;