import React, { Suspense } from 'react'
import SuspenseImage from './SuspenseImage'

export default function Functionality() {
  const [images] = React.useState(['https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80', 'https://images.unsplash.com/photo-1606038188414-ab55f710a8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606162381457-90876df6f2c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606154253659-7b6258c56a72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'])
  const [currentImage, setCurrentImage] = React.useState(images[0])

  const handleClick = (image) => {
    setCurrentImage(image)
  }

  return (
    <div className='landing-section'>
      <div className='rows'>
        <div  className='block-title align-center title'>Título</div>
        <div  className='block-title align-center subtitle'>Subtítulo</div>
        <div className='columns'>
          <div className='is-half'>
            <div className='rows' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="carousel">
                <Suspense fallback={ <PulseLoader /> }>
                  <SuspenseImage src={ currentImage } style={{ width: '100%' }} />
                </Suspense>
              </div>
              <div className="button button-big">
                call to action
              </div>
            </div>
          </div>
          <div className='is-half'>
            <div className="rows">
              <div className="grid">
                { images.map((image, index) => <div key={ index } className="grid-item2x2" onClick={ () => handleClick(image) }></div>) }
              </div>
              <div className='logos'>
                <div className="logo">logo</div>
                <div className="logo">logo</div>
                <div className="logo">logo</div>
                <div className="logo">logo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PulseLoader = () => <div>a</div>