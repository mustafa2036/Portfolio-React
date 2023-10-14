import React from 'react'
import {Link} from 'react-router-dom'

export default function Content() {
  return (
    <>
    <section className='found_Text py-5'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/home'>Home</Link> <span>/Content Creator</span></h2>
        </div>
      </div>
    </section>
    {/* <!-- Start Content --> */}
    <section className="services py-5 bg-color content-creator">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="servies-box text-center py-4">
              <div className="serives-icons py-2">
                <span> <i className="fab fa-tiktok"></i> </span>
              </div>
              <div className="box-content px-4">
                <h2 className="mt-2 text-capitalize fw-bold">TikTok</h2>
                <p className="mt-3">
                I provide content related to (programming - design - programs - montage...) on TikTok. 
                If you are interested in the content, go and take a look at the content.
                Don't forget to follow today for videos tomorrow
                </p>
                <Link to="https://www.tiktok.com/@mustafakhalifah22?is_from_webapp=1&sender_device=pc/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">Follow Me</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="servies-box text-center py-4">
              <div className="serives-icons py-2">
                <span> <i className="fab fa-instagram"></i> </span>
              </div>
              <div className="box-content px-4">
                <h2 className="mt-2 text-capitalize fw-bold">Instagram</h2>
                <p className="mt-3">
                I also provide related content (positivity - motivation - programs - education...) 
                on Instagram. If you are interested in the content, go and take a look at the content. 
                It will be useful to you.
                </p>
                <Link to="https://www.instagram.com/mustafakhalifha/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">Follow Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Content --> */}
    </>
  )
}
