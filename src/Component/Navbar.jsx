import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light py-4">
    <div className="container">
        <a className="navbar-brand text-uppercase fw-bold" href="home">
        Disha
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span>
            <i className="fas fa-bars"></i>
        </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link mx-2 active text-uppercase fw-bold"aria-current="page"to="home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase fw-bold" to="about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase fw-bold" to="works">Works</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase fw-bold" to="skills">Skills</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase fw-bold" to="content">Content</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase fw-bold" to="services">Services</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </>
  )
}
