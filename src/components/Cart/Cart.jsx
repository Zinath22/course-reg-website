/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    
    return (
        <div>
           <h1>This is cart</h1> 
           {
            selectedCourse.map((course) =>(
                <li>{course.course_title}</li>
            ))
           }
           
        </div>
    );
};

export default Cart;