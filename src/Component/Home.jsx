import React from 'react'
import {Link} from 'react-router-dom'
import Typed from 'typed.js'

export default function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed ("#element", {
      strings: [`I'm A FrontEnd Developer`, 
      `I'm A UI Developer`,
      `I'm A Video Creator`,
      `I'm A Content Creator`,
      ],
      typeSpeed:100,
      backSpeed: 50,
      loop: true, loopCount: Infinity,
      smartBackspace: true,
    });
    return () =>{
      typed.destroy();
    }
  })
  return (
    <>
    <section className="home" id="home">
      <div className="home-box position-relative d-flex justify-content-center align-items-center text-white">
        <div className="box-content position-relative">
          <p className="my-3 text-uppercase">Hi There</p>
          <h2 className="my-4 text-uppercase">I'm Mustafa Ramadan</h2>
          <h3 className="my-3 text-uppercase">
            <span id="element" ref={el}/>
          </h3>
          <div className="m-auto w-100 mt-5">
            <Link to="https://github.com/mustafa2036" target="_blank"
              className="btn btn-warning fw-bold px-lg-4 px-sm-3 py-3 text-uppercase">view GitHub</Link>
            <Link to="https://www.linkedin.com/in/mostafa-misse-a35199225/"
              target="_blank"className="btn btn-info ms-4 fw-bold px-lg-4 px-sm-3 py-3 text-uppercase">view linkedin</Link>
          </div>
          <Link href="about" className="icons mt-5"></Link>
        </div>
        <div className="arrow-up">
          <Link href="home"> <i className="fas fa-arrow-up"></i> </Link>
        </div>
      </div>
    </section>
    </>
  )
}
