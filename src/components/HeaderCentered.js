import React from 'react'

export default function HeaderCentered() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', background: '#900', height: '10vh' }}>
      <LeftSideHeader />
      <CenterHeader />
      <RightSideHeader />
    </div>
  )
}

const LeftSideHeader = () => {
  <div style={{ display: 'flex', flex: 5, order: 1, flexDirection: 'row', justifyContent: 'flex-start', background: '#f00', height: '100%' }}>

  </div>
}

const CenterHeader = () => {
  <div style={{ display: 'flex', flex: 2, order: 2, flexDirection: 'row', justifyContent: 'center', background: '#0f0', height: '100%' }}>

  </div>
}

const RightSideHeader = () => {
  <div style={{ display: 'flex', flex: 5, order: 3, flexDirection: 'row', justifyContent: 'flex-end', background: '#00f', height: '100%' }}>

  </div>
}

const HeaderItem = () => {
  <a href='#'>
    <div style={{ background: '#009', flex: 1, display: 'flex', justifyContent: 'center', alignContent: 'center', height: '90%' }}>
      Link
    </div>
  </a>
}

const HeaderLogo = () => {
  <a href='#'>
    <div style={{ background: '#090', flex: 2, display: 'flex', justifyContent: 'center', alignContent: 'center', height: '95%'}}>
      Logo
    </div>
  </a>
}