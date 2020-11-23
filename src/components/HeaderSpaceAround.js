import HeaderItem from './HeaderItem'
import HeaderLogo from './HeaderLogo'

export default function HeaderSpaceAround() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background:'#900', height: '10vh', minHeight: '70px', zIndex: 100 }}>
      <LeftSideHeader />
      <RightSideHeader />
    </div>
  )
}

const LeftSideHeader = () => (
  <div style={{ display: 'flex', flex: 6, order: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', background: '#f00', height: '100%' }}>
    <HeaderLogo />
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)

const RightSideHeader = () => (
  <div style={{ display: 'flex', flex: 6, order: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', background: '#f00', height: '100%' }}>
    <HeaderItem />
  </div>
)