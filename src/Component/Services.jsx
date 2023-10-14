import React from 'react'
import {Link} from 'react-router-dom'

export default function Services() {
  return (
    <>
    <section className='found_Text py-5'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/home'>Home</Link> <span>/Services</span></h2>
        </div>
      </div>
    </section>
    {/* <!-- Start Services --> */}
    <section className="services py-5 bg-color">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="servies-box text-center py-4">
              <div className="serives-icons py-2">
                <span> <i className="fa-solid fa-pen"></i> </span>
              </div>
              <div className="serives-content px-3">
                <h2 className="mt-2 text-capitalize fw-bold">Web Design</h2>
                <p className="mt-3">
                  I take care of every design detail, from the layout of the
                  structure to the choice of colors and fonts, to ensure an
                  unforgettable user experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="servies-box text-center py-4">
              <div className="serives-icons py-2">
                <span> <i className="fa-solid fa-desktop"></i> </span>
              </div>
              <div className="serives-content px-3">
                <h2 className="mt-2 text-capitalize fw-bold">Responsive Design</h2>
                <p className="mt-3">
                  We embrace the concept of responsive design to ensure that
                  your site looks perfect and runs smoothly across all devices,
                  regardless of screen size.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="servies-box text-center py-4">
              <div className="serives-icons py-2">
                <span> <i className="fa-solid fa-clipboard-check"></i> </span>
              </div>
              <div className="serives-content px-3">
                <h2 className="mt-2 text-capitalize fw-bold">Web Development</h2>
                <p className="mt-3">
                  Web development includes working on the functional structure
                  of the site, from base design to code implementation and
                  testing, web development includes building back-end systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Services --> */}
    </>
  )
}
