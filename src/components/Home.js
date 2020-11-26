import HeaderCentered from './HeaderCentered'
import backgroundImage from '../assets/fondo_1920_png.png'
import secondBackground from '../assets/persona1_1920_png.png'

export default function Home() {
  return (
    <div className='landing-section'>
      <HeaderCentered />
      <div className='columns with-header' style={ fullBackgroundImageStyle }>
        <div className='is-half rows'>
          <p className='title'>
            Título
          </p>
          <p className='subtitle'>
            subtítulo
          </p>
          <p className='text'>
            asdasdasdasdasd
          </p>
          <button className='button button-big'>call to action</button>
        </div>
        <div className='is-half' style={ halfBackgroundImage }>
        </div>
      </div>
    </div>
  )
}

const fullBackgroundImageStyle = {
  width: '100%',
  height: '100%',
  background: 'url(' + backgroundImage + ') no-repeat right'
}

const halfBackgroundImage = {
  background: 'url(' + secondBackground + ') no-repeat right bottom',
  backgroundSize: '100%'
}