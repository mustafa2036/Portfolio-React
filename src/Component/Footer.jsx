import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <p className="text-uppercase fw-bold">
              copyright &copy; 2022 all right reserved
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <p className="fw-bold text-lg-center text-md-end text-uppercase">
              Thanks for patience
            </p>
          </div>
          <div className="col-lg-4">
            <ul className="text-lg-center">
              <li>
                <Link to="https://www.facebook.com/anamostafa.misse" target="_blank">
                  <i className="fab fa-facebook px-2"></i>
                </Link>
                <Link to="https://github.com/mustafa2036" target="_blank">
                  <i className="fab fa-github px-2"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/mostafa-misse-a35199225/" target="_blank">
                  <i className="fab fa-linkedin px-2"></i>
                </Link>
                <Link to="https://www.tiktok.com/@mustafakhalifah22" target="_blank">
                  <i className="fab fa-tiktok px-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
