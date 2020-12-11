import React, { useState } from "react";
import fakedata from "../Fakedata/MOCK_DATA.json";
import Subject from "../Subjects/Subject";
import "./Courses.css";

const Courses = () => {
  const course10 = fakedata.slice(0, 4);
  console.log(course10);
  const [course, setCourse] = useState(course10);
  const [cart, setCart] = useState([]);
  const handleCourse = (courses) => {
    const newCourse = [...cart, courses];
    setCart(newCourse);
  };

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const total = cart[i];
    totalPrice = totalPrice + total.price;
  }

  return (
    <div className="course-container">
      <h2 className="title">Courses:</h2>
      <div class="row">
        <div class="col-md-9">
          {course.map((sub) => (
            <Subject handleCourse={handleCourse} course={sub}></Subject>
          ))}
        </div>
        <div class="col-md-3">
          <h2 className="title">Your Courses: </h2>
          <h5 className="price item">Total Enrolled: {cart.length}</h5>
          <h5 className="price total">Total Price: {totalPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default Courses;
