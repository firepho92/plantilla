import React, { Suspense } from 'react'
import SuspenseImage from './SuspenseImage'

export default function Textimonios() {
  const [images] = React.useState(['https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80', 'https://images.unsplash.com/photo-1606038188414-ab55f710a8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606162381457-90876df6f2c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606154253659-7b6258c56a72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'])
  const [currentImageIndex, setCurrentImageIndex] = React.useState(3)

  const handleClick = (imageIndex) => {
    setCurrentImageIndex(imageIndex)
  }

  const a = (index) => {
    setCurrentImageIndex(index)
  }

  const autoChangeImage = () => {
    const time = 2000
    setInterval(() => {
      console.log(images.length + ' ' + currentImageIndex)
      if(currentImageIndex === images.length - 1) {
        console.log('fin')
        setCurrentImageIndex(0)
      } else {
        let index = currentImageIndex + 1
        a(index)
      }
    }, time)
  }

  return(
    <div className="landing-section">
      <div className='block-title align-center title'>
        Testimonios
      </div>
      <div className="rows" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', maxHeight: '90%' }}>
        <div className="carousel" style={{ maxWidth: '75%', flexDirection: 'column', position: 'relative', height: '50%' }}>
          <Suspense fallback={ <PulseLoader /> }>
            <SuspenseImage src={ images[currentImageIndex] } style={{ width: '100%' }} />
          </Suspense>
          <div className="carousel-right-arrow"><i className="fas fa-chevron-left"></i></div>
          <div className="carousel-left-arrow"><i className="fas fa-chevron-right"></i></div>
          <div className='carousel-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
        <button className='button button-big' style={{ zIndex: 1000 }}>call to action</button>
      </div>
    </div>
  )
}

const PulseLoader = () => <div>a</div>

const Card = () => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxHeight: '90%', maxWidth: '90%', boxShadow: 'box-shadow: 2px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', padding: '1em', borderRadius: '5px', boxSizing: 'border-box', position: 'relative' }}>
    <div style={{ position: 'relative', borderRadius: '25%', height: '10%', width: '10%' }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
)
/*

*/