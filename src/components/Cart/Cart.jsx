/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Cart = ({selectedCourse, remaining,totalCredit}) => {
    console.log(selectedCourse)
    
    return (
        <div  className="card w-[350px] bg-base-100 shadow-xl  items-center text-center">
               <h2>Credit Hour Remaing{remaining}hr</h2>
           <h1 className="text-2xl font-bold">Course Name:</h1> 
       
           
           {
            selectedCourse.map((course) =>(
                
                <li key={course.id} className="">{course.course_title}</li>
            ))
            
           }
           <h1 className="text-2xl ">Total Credit Hour:{totalCredit}</h1>
           
        </div>
    );
};
Cart.propTypes ={
    remaining : PropTypes.number,
    selectedCourse : PropTypes.array,
    totalCredit: PropTypes.array

}

export default Cart;