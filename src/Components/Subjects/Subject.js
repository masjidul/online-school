import React from "react";
import "./Subject.css";

const Subject = (props) => {
  const {
    course_name,
    first_name,
    last_name,
    rating,
    price,
    image,
  } = props.course;

  return (
    <div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col customize">
            <div>
              <img className="image" src={image} alt="" />
            </div>
            <div>
              <h3 className="title">{course_name}</h3>
              <p>
                By:{" "}
                <small>
                  {first_name} {last_name}
                </small>
              </p>
              Rating: <small>{rating}</small>
              <p>${price}</p>
              <button
                class="btn btn-secondary"
                onClick={() => props.handleCourse(props.course)}
              >
                Enroll Now!
              </button>
            </div>
          </div>
          <div class="col customize">
            <div>
              <img className="image" src={image} alt="" />
            </div>
            <div>
              <h3 className="title">{course_name}</h3>
              <p>
                By:{" "}
                <small>
                  {first_name} {last_name}
                </small>
              </p>
              Rating: <small>{rating}</small>
              <p>${price}</p>
              <button
                class="btn btn-secondary"
                onClick={() => props.handleCourse(props.course)}
              >
                Enroll Now!
              </button>
            </div>
          </div>
          <div class="col customize">
            <div>
              <img className="image" src={image} alt="" />
            </div>
            <div>
              <h3 className="title">{course_name}</h3>
              <p>
                By:{" "}
                <small>
                  {first_name} {last_name}
                </small>
              </p>
              Rating: <small>{rating}</small>
              <p>${price}</p>
              <button
                class="btn btn-secondary"
                onClick={() => props.handleCourse(props.course)}
              >
                Enroll Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
