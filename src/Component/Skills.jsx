import React from 'react'
import {Link} from 'react-router-dom';

export default function Skills() {
    return (
    <>
    <section className='found_Text py-5 skills'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/content'>Content</Link> <span>/Skills</span></h2>
        </div>
      </div>
    </section>
    {/* <!-- Start Skills --> */}
    <section className="skills py-5 bg-color">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="title-skills mb-4">
              <h4>Skills <span>FrontEnd Developer</span></h4>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Html5 / Css3 / Bootstrap / Scss</p>
                  <p className="fw-bold">95%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "95%"}} data-width="95%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">javaScript / ES6</p>
                  <p className="fw-bold">80%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "80%"}} data-width="80%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">React.js</p>
                  <p className="fw-bold">83%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "83%"}} data-width="83%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Plugins (CSS / JS / React)</p>
                  <p className="fw-bold">70%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "70%"}} data-width="70%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Git / GitHub / npm</p>
                  <p className="fw-bold">85%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "85%"}} data-width="85%"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-skills mb-4">
              <h4>Skills <span>Content Creator</span></h4>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Content Creator</p>
                  <p className="fw-bold">97%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "97%"}} data-width="97%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Video Editor</p>
                  <p className="fw-bold">92%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "92%"}} data-width="92%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">CauCut Editor</p>
                  <p className="fw-bold">96%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "96%"}} data-width="96%"></span>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="box-skills">
                <div className="d-flex justify-content-between">
                  <p className="text-uppercase fw-bold">Adobe Xd / Figma</p>
                  <p className="fw-bold">70%</p>
                </div>
              </div>
              <div className="progress">
                <span style={{width: "70%"}} data-width="70%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Skills --> */}
    </>
  )
}
