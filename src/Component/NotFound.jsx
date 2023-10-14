import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <>
    <section className='found_Text py-5 not_found'>
      <div className='found'>
        <div className='talkall text-center'>
        <h2><Link to='/home'>Home</Link> <span>/Page Not Found</span></h2>
        </div>
      </div>
    </section>
    </>
  )
}
