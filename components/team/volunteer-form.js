import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { SignUp } from "../../service/api";



const VolunteerForm = () => {
  const [email,setEmail]=useState();
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [password,setPassword]=useState();
  const [confirm_password,setConfirmPassword]=useState();
  const [role,setRole]=useState("Help Seeker");
  const [user,setUser]=useState({
    firstName:firstName,
    lastName:lastName,
    password:password,
    email:email,
    role:role,
    imageUrl:''

  }
   
  );
  const _handleUser = (event)=>{
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
   
   }
  
const _handleConfirmPassword = (Event)=>{
        setConfirmPassword(Event.target.value);
        
        } 

const submit = ()=>{
  if(!user.firstName){
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter your FirstName!',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }else{

    if(!user.lastName ){
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter your LastName!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      if(!user.email ){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter your Email!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        if(!user.password ){
          Swal.fire({
            title: 'Error!',
            text: 'Please Enter your Password!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else{
          if(!confirm_password ){
            Swal.fire({
              title: 'Error!',
              text: 'Please Confirm your password!',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }else{
            if(!user.role ){
              Swal.fire({
                title: 'Error!',
                text: 'Please Enter your Role!',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            }else{
              if(user.password.length<8){
                Swal.fire({
                  title: 'Error!',
                  text: 'Password must contains 8 character or more',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                })
              }else{
                if(user.password!=confirm_password){
                  Swal.fire({
                    title: 'Error!',
                    text: 'Your Confirm password must be the same as password',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
                }else{
                  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)){
                    Swal.fire({
                      title: 'Error!',
                      text: 'Please Verify your Email!',
                      icon: 'error',
                      confirmButtonText: 'Ok'
                    })
                }else{
              
                  console.log(user);
                 SignUp(user).then(function (response) {
                  console.log(response.data);
                })
                .catch(function (error) {
                  console.log(error);
                });

                }
               
              }
              }
            
          
          }
      
        }
     
      }
   
    }
   
  }

 
 




 
  }

  


  

}
 console.log(firstName);
  return (
    <section className="become-volunteer pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="become-volunteer__content mb-40">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Join Us Now
                </p>
                <h3>
                  Register yourself as <br /> our volunteer.
                </h3>
              </div>
              <p className="block-text mb-40 pr-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
              <ul className="list-unstyled ul-list-one">
                <li>Nsectetur cing elit.</li>
                <li>Suspe ndisse suscipit sagittis leo.</li>
                <li>Entum estibulum dignissim posuere.</li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <form className="contact-form-validated become-volunteer__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstname"
                    onChange={_handleUser}
                    placeholder="Your FirstName"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    LastName
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastname"
                    onChange={_handleUser}
                    placeholder="Your LastName"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={_handleUser}
                    placeholder="Email Address"
              
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="psw"
                    onChange={_handleUser}
                    placeholder="Password"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="cpsw"
                    onChange={_handleConfirmPassword}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="role" className="sr-only">
                    Role
                  </label>
                <select onChange={_handleUser} type="select" name="role" id="role" >
                   
                    <option value="Help Seeker">Help Seeker</option>
                    <option value="Helper">Helper</option>
                    <option value="Organization">Organization</option>
                    
               
                </select>
                 </div>
            {/*    <div className="form-control">
                  <label htmlFor="date-of-birth" className="sr-only">
                    date of birth
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="date-of-birth"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="address" className="sr-only">
                    address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="occupation" className="sr-only">
                    occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    placeholder="Occupation"
                  />
                </div>
           /     <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write a Message"
                  ></textarea>
                </div> */}
                <div className="form-control form-control-full">
                  <button type="button" className="thm-btn " onClick={submit}>
                    Register Now
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VolunteerForm;
