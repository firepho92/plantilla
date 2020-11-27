import React from 'react'
import HeaderItem from './HeaderItem'
import HeaderLogo from './HeaderLogo'

export default function HeaderCentered() {

  return (
    <div className='header-centered'>
      <LeftSideHeader />
      <CenterHeader />
      <RightSideHeader />
    </div>
  )
}

const LeftSideHeader = () => (
  <div className='left-side-header'>
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)

const CenterHeader = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='center-side-header'>
      <HeaderLogo />
      <div className={ 'hamburguer ' + (toggle ? 'change' : '') } onClick={ handleClick }>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

const RightSideHeader = () => (
  <div className='right-side-header'>
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)