/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";



// import cover from '../../assets/images/Rectangle 2-1.png'
const Home = () => {
   const[allCourse, setAllCourse] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
   console.log(allCourse)

    return (
    <div className="flex mt-10 justify-between">

        <div className=" grid lg:grid-cols-3 md:grid-cols-1 gap-4">
           
            
           {
            allCourse.map((course) =>(
                
                <div key={course.id} className=" mb-5 card rounded-md bg-base-100 shadow-xl w-[315px] h-[420px]">
          <div className="card-body  items-center text-center ">
          
          <div className="px-5 pt-5">
          <img  src={course.cover_image} alt="" />
          </div>
          
          <div className="justify-start items-start text-left px-5 mb-5">
          <h2 className="mt-2 mb-2 text-lg font-bold">{course.course_title}</h2>
          <p className="text-lg mb-2">{course.course_details}</p>
          <div className="flex gap-5">
              <h3 className="text-lg">$ Price:{course.price}</h3>
              <h3>Credit:{course.credit_hr}</h3>
          </div>
          
          </div>

          </div>
          <button className="btn rounded-lg w-[280px] h-[40px] bg-sky-400">Select</button>
         </div>
            
            ))
           }
          
            </div>
            <div>
            <h1 className="text-4xl">Credit Hour</h1>
        </div>
           
            </div>
            
            
        
        
       
    );
};

export default Home;