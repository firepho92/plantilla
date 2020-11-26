import React from 'react'

export default function Content() {
  const [ email, setEmail ] = React.useState('')

  const handlesubmit = (event) =>{
    event.preventDefault()
    console.log(email)
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setEmail(event.target.value)
  }


  return(
    <div className="landing-section">
      <div className="media">
        <div className='align-center title' style={{ maxHeight: '10%' }}>
          Contenido
        </div>

        <div className="media-wrapper">
          <div className="rows">
            <div className="media-display">
            </div>
            <div className="social-media-wrapper"></div>
          </div>
          <div className="media-thumbnails-wrapper">
            <div className="media-thumbnails"></div>
            <div className="media-thumbnails"></div>
            <div className="media-thumbnails"></div>
            <div className="media-thumbnails"></div>
            <div className="media-thumbnails"></div>
          </div>
        </div>

        <div className='newsletter' style={{ maxHeight: '20%' }}>
          Newsletter
          <form onSubmit={ handlesubmit }>
            <input className='text-input' type='email' onChange={ handleInputChange } value={ email } />
            <input type='submit' className='button button-medium' style={{ textAlign: 'center' }} value='Suscribirse' />
          </form>
        </div>
      </div>
    </div>
  )
}