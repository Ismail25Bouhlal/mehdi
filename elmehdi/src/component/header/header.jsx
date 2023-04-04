import React from 'react'
import portrait from '../aset/portrait-white-man-isolated.jpg'
import './header.css'

const header = () => {
  return (
    <section>
        <div className='portrait'>
            <img src={portrait}/>
        </div>
        <div className='name'>
            <p>Hello i'am Mehdi</p>
            <h1>A frontend developer <br />&nbsp;specialised in React</h1>
        </div>
    </section>
  )
}

export default header