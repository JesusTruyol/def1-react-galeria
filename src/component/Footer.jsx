import React from 'react'
import {Button} from "react-bootstrap";

const Footer = () => {
  return (

      <div className='footer'>
        
        <div className='footer-button'>
          <Button variant='primary'>Información</Button>
        </div>

        <div className='footer-title'>
          <h6>Todos los derechos reservados</h6>
        </div>
      </div>

  )
}

export default Footer