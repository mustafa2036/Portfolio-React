import React from 'react'
import {Link} from 'react-router-dom'
import Img from './Images/about-3.jpg'

export default function About() {
  return (
    <>
    <section className='found_Text py-5'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/home'>Home</Link> <span>/About</span></h2>
        </div>
      </div>
    </section>
    {/* <!-- Start About --> */}
    <section className="about py-5 bg-color scrollspy-example" id="about">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-4 offset-lg-1" data-aos="fade-up" data-aos-duration="3000">
            <div className="image">
              <Link to="/home">
                <div className="overflow"></div>
                <img src={Img} className="w-75" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-duration="3000">
            <div className="content pt-lg-3 pb-md-3">
              <p className="fw-bold text-uppercase position-relative">
                I'm Mustafa Ramadan,
              </p>
              <span> FrontEnd Developer/ UI Developer/ Content Creator/ Video Edtior</span>
            </div>
            <div className="about-content">
              <p className="text-capitalize">
                A Frontend Developer at and looking for a full-time / part-time
                position in the field of Frontend developer where I can apply my
                knowledge and skills for continuous improvement and find an
                opportunity to capitalize on my skills, technical abilities and
                learn new technologies. Work Experience
              </p>
              <p className="text-capitalize">
                Presentation Skills Leadership - Self-Learning - Time Management
                - Ability to work independently or as part of a team - Work
                under pressure
              </p>
            </div>
            <div className="about-user">
              <ul>
                <li className="py-2 my-1">
                  <span className="text-capitalize fw-bold">fullname</span> :
                  <p className="d-inline ps-1 text-muted">
                    Mostafa Ramadan Mohamed
                  </p>
                </li>
                <li className="py-2 my-1">
                  <span className="text-capitalize fw-bold">Birthday</span> :
                  <p className="d-inline ps-1 text-muted">29 Aug 2000</p>
                </li>
                <li className="py-2 my-1">
                  <span className="text-capitalize fw-bold">phone number</span> :
                  <p className="d-inline ps-1 text-muted">01124780896</p>
                </li>
                <li className="py-2 my-1">
                  <span className="text-capitalize fw-bold">E-mail</span> :
                  <p className="d-inline ps-1">
                    <Link to="/home">mostafa.missy.58@gmail.com</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End About --> */}
    </>
  )
}
