import React from 'react'
import {Link} from 'react-router-dom'

export default function Works() {
  return (
    <>
    <section className='found_Text py-5'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/home'>Home</Link> <span>/Works</span></h2>
        </div>
      </div>
    </section>
    {/* <!-- Start works --> */}
    <section className="works py-5 bg-color" id="works">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Weather_App</h3>
              <p className="mb-4 fw-bold px-3">
                it is an app to forecast the weather for 3 days by JavaScript
                with API used (Weather API), (Responsive 100%) off done.
              </p>
              <Link to="https://mustafa2036.github.io/ReactWeather/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"data-aos="fade-up"data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Movies_Api</h3>
              <p className="mb-4 fw-bold px-3">
                it is an app to show information on the movies and also form a
                valid registration by JavaScript (Responsive 100%)
              </p>
              <Link to="https://mustafa2036.github.io/MoviesAPi/"
                target="_blank"className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Recipe_Api</h3>
              <p className="mb-4 fw-bold px-3">
                it is an app to show information on the Food Recipe and also
                form a valid registration by JavaScript (Responsive 100%)
              </p>
              <Link to="https://mustafa2036.github.io/Recipe/" target="_blank"
                className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Zay</h3>
              <p className="mb-4 fw-bold px-3">
                (UI From FrontEnd),it is an app to clothes for 4 days by JavaScript with API used
                (Shop API)
              </p>
              <Link to="https://mustafa2036.github.io/ZAY/" target="_blank"
                className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Ecolife</h3>
              <p className="mb-4 fw-bold px-3">
                it is a simple template as a Ecolife using HTML and Sass and
                JavaScript (Responsive 100%)
              </p>
              <Link to="ecolife-six.vercel.app"target="_blank"
                className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"data-aos="fade-up"data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Cyborg App</h3>
              <p className="mb-4 fw-bold px-3">
                it is an app to show information on the Games and also form a
                valid registration by JavaScript
              </p>
              <Link to="https://mustafa2036.github.io/Cyborg/"
                target="_blank"className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Shop_Api</h3>
              <p className="mb-4 fw-bold px-3">
              (React From FrontEnd)it is an app to clothes Shop for 4 days by JavaScript with API
                used (Shop API)
              </p>
              <Link to="https://mustafa2036.github.io/shopAPi_2/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Davfolio Portfolio</h3>
              <p className="mb-4 fw-bold px-3">
              (UI From FrontEnd),it is a project as a personal portfolio using HTML, CSS and
                Bootstrap
              </p>
              <Link
                to="https://mustafa2036.github.io/DevFolio_Website/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="work text-center py-5">
              <h3 className="text-capitalize fw-bold mb-4">Rolex Template</h3>
              <p className="mb-4 fw-bold px-3">
                it is a simple template as a Rolex using HTML and Sass and
                JavaScript (Responsive 100%)
              </p>
              <Link to="https://mustafa2036.github.io/rolex/"
                target="_blank" className="btn text-capitalize py-2 px-4 fw-bold">View Template</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End works --> */}
    </>
  )
}
