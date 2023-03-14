import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import { useEffect, useState } from "react";
import api from "../../api";
import axios from 'axios'


const LoginForm = () => {
    const [data, setData] = useState({
        email: "" ,
        password:""
      });
    const {email, password } = data;

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

      console.log(email+'/'+password);

      const userObject = {
        email: email,
        password: password
    };
const login = (event)=>{
        console.log(email+'/'+password);
        event.preventDefault();
        axios.post('http://localhost:3001/signin', userObject).then((res) => {
            console.log(res);
            if (res) {
              
              return res;
            }
        })
      }
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
            <form className="contact-form-validated become-volunteer__form form-one mb-40" onSubmit={login} autoComplete="off">
              <div className="">
              <br></br>
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    name
                  </label>
                  <input
                    onChange={(e) => onValueChange(e)}
                    value={email}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div><br></br>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    onChange={(e) => onValueChange(e)}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <br></br>             
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn" >
                    Sign in Now
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

export default LoginForm;
