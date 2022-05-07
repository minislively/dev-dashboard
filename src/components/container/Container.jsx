import React from 'react'
import './container.css'
import { Link } from 'react-router-dom'


const Container = () => {
  return (
    <div className="container">
      <div className="col-8">
        <div className="card">
          <div className="card__header">
            <h3>latest orders</h3>
          </div>
          <div className="card__body">

          </div>
          <div className="card__footer">
            <Link to='/'>view all</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container