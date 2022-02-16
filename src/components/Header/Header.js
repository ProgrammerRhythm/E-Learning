import React, { useState } from 'react';
import logo from '../../Images/Logo.png'
import cover from '../../Images/Screenshot_4_auto_x2.jpeg'
import book from '../../Images/book.png'
import student from '../../Images/Student.png'
import text from '../../Images/Test.png'
import students from '../../Images/Students.png'
import './Header.css'
import Course from '../Course/Course';
const Header = () => {
    const [cart,setCart] = useState([])
    const handleAdded = (course) =>{
        alert('Course Added Visit Ditails for place order')
        var newCart = [...cart, course]
        setCart(newCart)
    }
    const total = cart.reduce((total, cart) => total + cart.price,0)
    const clickd = () => {
        window.location.reload();
    }
    return (
    <div>
    <header>
    <div className="container header1">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img style={{height: "45px"}} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav responsive">
              <li className="nav-item">
                <a className="nav-link text-dark active" aria-current="page" href="/books">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href='/course'>Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/other">Others</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <button style={{padding: '10px 20px'}} onClick={hide} className="btn"> Details </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="headerBody container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text">
          <p style={{color: '#FD511A'}}>Are you ready to Learn?</p>
          <h1 className="header"><b>Learn With fun on <br /><span style={{color: '#21B573'}}>any schedule</span></b></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim architecto cum ipsa quo, nisi saepe voluptates quaerat nobis!</p>
          <button className="btn"><a className="nav-link" href="/">Get Started</a></button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  ">
            <img style={{maxWidth: '100%', height: 'auto'}} src={cover} alt="" />
        </div>
      </div>
    </div>
    <div className="container babe">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div className="card ">
            <div className="imge d-flex justify-content-center">
            <img  src={book} className="card-img-top hei" alt="..." />
          </div>
            <div className="card-body">
              <h5 style={{textAlign: 'center', color: '#413960', fontSize: '24px'}} className="card-title ">1500+ Topic</h5>
              <p style={{textAlign: 'center',color: 'gray'}} className="card-text">Learn Anythings</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div className="card">
            <div className="imge d-flex justify-content-center">
              <img  src={student} className="card-img-top hei" alt="..." />
            </div>
            <div className="card-body">
              <h5 style={{textAlign: 'center', color: '#413960', fontSize: '24px'}}className="card-title ">1800+ Students</h5>
              <p style={{textAlign: 'center',color: 'gray'}} className="card-text">Learn Anythings</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div className="card">
            <div className="imge d-flex justify-content-center">
              <img  src={text} className="card-img-top hei" alt="..." />
            </div>
            <div className="card-body">
              <h5 style={{textAlign: 'center', color: '#413960', fontSize: '24px'}}className="card-title ">9K+ Test Token</h5>
              <p style={{textAlign: 'center',color: 'gray'}} className="card-text">Learn Anythings</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div className="card">
            <div className="imge d-flex justify-content-center">
              <img  src={students} className="card-img-top hei" alt="..." />
            </div>
            <div className="card-body">
              <h5 style={{textAlign: 'center', color: '#413960', fontSize: '24px'}} className="card-title ">2000+ Student</h5>
              <p style={{textAlign: 'center',color: 'gray'}} className="card-text">Learn Anythings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Course handleAdded={handleAdded}></Course>
    </header>
    <main>
    <div className="container">
    <h2 style={{textAlign:'center', marginBottom:'20px'}}>Cart Details</h2>
    <table id="customers">
    <tr>
        <th>Course Name</th>
        <th>Enroll Students</th>
        <th>Price</th>
    </tr> 
      {
          cart.map(v => <Table name={v.name} price={v.price} seats={v.seats}></Table>)
      }
      <tr>
          <td></td>
          <td><b>Total</b></td>
          <td><b>{total}</b></td>
      </tr>
      </table>
      <button onClick={clickd} style={{borderRadius: '5px',padding: '6px 16px',border: '1px solid red', float: 'right',marginTop: '20px'}} type="button" class="btn-outline-danger">Place Order</button>
    </div>
    </main>
    </div>
    );
    function hide(){
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    }
function Table(props){
return (
  <tr>
    <td>{props.name}</td>
    <td>{props.seats}</td>
    <td>{props.price}</td>
  </tr>
    )
}
};

export default Header;