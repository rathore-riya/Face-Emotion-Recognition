import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import web from "./images/login.png";
import photo from "./images/contact .png"
import axios from "axios";
import { toast } from "react-toastify";


function ContactUs() {
const [name,setName]=useState('');
const [phone,setPhone]=useState('');
const [email,setEmail]=useState('');
const [msg,setMessage]=useState('');

  const handleSubmit = async () => {
    const resp = await axios.post("http://localhost:3001/contactus", {Name: name, Phoneno: phone, Email:email, Message: msg});

    console.log(resp);
    toast.success(resp.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        Navigate("/");
      },  6000)
  };
  return (
    <>
      <div className="row">
        <div className="col-md-3">
         
        </div>
        <section className="vh-100 col">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <h1 className=" mb-4 text-center">Contact Us</h1>

                <div className="card border">
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Full name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@abc "
                          name="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Phone No</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@12345"
                          name="Phoneno"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Email address</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="Email"
                          className="form-control form-control-lg"
                          placeholder="example@example.com"
                          name="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Message</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Message..."
                          name="Message"
                          value={msg}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <hr className="mx-n3" />

                    <div className="px-5 py-4">
                      <button type="button" className="btn btn-primary btn-lg"
                       onClick={() => handleSubmit()}>
                        
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default ContactUs;