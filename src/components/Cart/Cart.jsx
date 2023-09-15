/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Cart = ({ selectedCourse, remaining, totalCredit,totalPrice }) => {
    // console.log(selectedCourse)

    return (
        <div className="card w-[350px] bg-base-100 shadow-xl pl-4 items-start text-left">
            <h2 className="text-2xl text-blue-600 border-b-2 py-6">
                Credit Hour Remaing {remaining} hr
            </h2>
            <h1 className="text-2xl font-bold py-5">Course Name:</h1>

            {selectedCourse.map((course) => (
                <li key={course.id} className="list-decimal mb-3">
                    {course.course_title}
                </li>
            ))}
            <h1 className="text-2xl border-t-2 py-4 mt-10">
                Total Credit Hour:{totalCredit}
            </h1>
            <h1 className="text-2xl pb-5 border-t-2">Total price:{totalPrice}</h1>
        </div>
    );
};
Cart.propTypes = {
    remaining: PropTypes.number,
    selectedCourse: PropTypes.array,
    totalCredit: PropTypes.array,
    totalPrice:PropTypes.array,
};

export default Cart;
