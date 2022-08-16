import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = ({imag, title, pais}) => {
  return (
   
      <div className="card m-3 card-hvr">
        
        <div className='card-image m-2'>
          <img className='image' src={imag} alt={title} />
        </div>
        
        
        <div className='card-description m-2'>
          <h3 className='title'>{title}</h3>
          <p className='pais'>{pais}</p>
        </div>
        
      </div>

  )
}

export default Cards