import React from 'react'
import Home from './Home'
import Solutions from './Solutions'
import Functionality from './Functionality'
import './styles.css'

export default function Landing() {
  const [currentSection, setCurrentSection] = React.useState(0)
  const [prev, setPrev] = React.useState(0)

  /*React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
*/
/*
  const handleScroll = (event) => {
    if(prev < window.scrollY) {
      console.log(prev + ' ' + window.scrollY)
      console.log('scroll down')
    }
    console.log(window.scrollY)
    setPrev(window.scrollY)
    const window = event.currentTarget
    console.log(prev + ' ' + window.scrollY)
    if(prev < window.scrollY) {
      console.log('scroll down')
    } else if(prev > window.scrollY) {
      console.log('scroll up')
    } else { 
      console.log('static')
    }
    setPrev(window.scrollY)
  }
  */

  return (
    <div className='normalize'>
      <Home />
      <Solutions />
      <Functionality />
    </div>
  )
}