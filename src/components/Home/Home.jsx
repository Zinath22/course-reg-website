
import { useEffect } from "react";
import { useState } from "react";
import Cart from '../Cart/Cart'
import {  FaBookmark } from 'react-icons/fa'
import toast from "react-hot-toast";

/* eslint-disable react/jsx-key */



const Home = () => {
   const[allCourse, setAllCourse] = useState([])
   const [selectedCourse, setselectedCourse] = useState([])
   const[remaining, setRemaining] = useState(0)
   const [totalCredit , setTotalCredit] = useState(0)
   
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
        let total = course.credit_hr;
        selectedCourse.forEach(item => {
            count +=  item.credit_hr;
            total += item.credit_hr;
        }
        )
        const totalRemaining = 20 - count;
        if(count > 20){
           return toast.error('Limited credit hour');
        }else{
            setTotalCredit(total)
            setRemaining(totalRemaining)
            setselectedCourse([...selectedCourse, course])

        }
    }
       
    }
    // console.log(selectedCourse)
//    console.log(allCourse)

    return (
    <div className="flex mt-10 justify-between">

        <div className=" grid lg:grid-cols-3 md:grid-cols-1 gap-4">
           
            
           {
            allCourse.map((course) =>(
                
                <div key={course.id} className=" mb-5 card rounded-md bg-base-100 shadow-xl w-[315px] h-[450px]">
          <div className="card-body  items-center text-center ">
          
          <div className="px-5 pt-5">
          <img  src={course.cover_image} alt="" />
          </div>
          
          <div className="justify-start items-start text-left px-5 ">
          <h2 className="mt-2 mb-2 text-lg font-bold">{course.course_title}</h2>
          <p className="text-lg mb-2">{course.course_details}</p>
          <div className="flex gap-5">
              <h3 className="text-lg"><span className="font-bold">$ </span>Price:{course.price}</h3>
              <button><FaBookmark></FaBookmark></button>
              <h3>Credit:{course.credit_hr}hr</h3>
          </div>
          
          </div>

          </div>
          <button onClick={()=>handleSelectCourse(course)} className="btn text-lg text-white mt-5 rounded-lg w-[280px] h-[40px] bg-sky-600">Select</button>
         </div>
            
            ))
           }
          
            </div>
            <div className="cart">
            <Cart selectedCourse={selectedCourse} 
            remaining ={remaining}
            totalCredit={totalCredit}>

            </Cart>
        </div>
           
            </div>
            
            
        
        
       
    );
};

export default Home;