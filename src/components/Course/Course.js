import React from 'react';
import "./Course.css"
import people from '../../Images/people.png';
import calendar from '../../Images/calendar.png';
import data from './value';
const Course = (props) => {
    const click = props.handleAdded;
    return (
        <div className="container"> 
        <h1 className="title animate__animated animate__zoomIn animate__delay-1s">Online Courses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            data.map(course => <Show click={click} img={course.img} name={course.name} price={course.price} date={course.date} seats={course.seats}></Show>)
        }
    </div>
    </div>
    );
    function Show(props) {
        return (

        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card animate__animated animate__fadeInUpBig">
            <img src={props.img} className="card-img-top" alt=""  />
            <div className="card-body">
              <h4 style={{color: "#413960"}} className="card-title"><small>{props.name}</small></h4>
              <h5 style={{color: "gray"}} className="card-text">Price: ${props.price}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => props.click(props)} style={{marginTop:'10px', marginBottom:'15px'}}className="hey">Buy Course</button>
              <div className="row">
                <div className="col-7 pa">
                    <img style={{width: "18px", height: "20px"}}  src={calendar} alt=""/><span style={{padding: '5px', color: 'gray'}}>{props.date} April, 2021</span>
                </div>
                <div className="col-5 pa">
                  <img style={{width: "18px", height: "20px"}} src={people}alt=""/><span style={{padding: '5px', color: 'gray' }}>{props.seats} seats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
};

export default Course;