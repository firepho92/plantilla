import React, { Suspense } from 'react'
import SuspenseImage from './SuspenseImage'

export default function Textimonios() {
  const [images] = React.useState(['https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80', 'https://images.unsplash.com/photo-1606038188414-ab55f710a8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606162381457-90876df6f2c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1606154253659-7b6258c56a72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'])
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    console.log(images[currentImageIndex])
    autoChangeImage()
  }, [])

  const handleClick = (imageIndex) => {
    setCurrentImageIndex(imageIndex)
  }

  const autoChangeImage = () => {
    const time = 2000
    setInterval(() => {
      console.log(images.length + ' ' + currentImageIndex)
      if(currentImageIndex === images.length - 1) {
        console.log('fin')
        setCurrentImageIndex(0)
      } else {
        console.log('mas uno')
        console.log(currentImageIndex + 1)
        setCurrentImageIndex(currentImageIndex + 1)
      }
    }, time)
  }

  return(
    <div className="landing-section">
      <div className='block-title align-center title'>
        Testimonios
      </div>
      <div className="columns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="carousel" style={{ maxWidth: '75%', flex: '0 0 75%' }}>
          <Suspense fallback={ <PulseLoader /> }>
            <SuspenseImage src={ images[currentImageIndex] } style={{ width: '100%' }} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

const PulseLoader = () => <div>a</div>