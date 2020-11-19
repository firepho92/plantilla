export default function HeaderSpaceAround() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background:'#900', height: '10vh', minHeight: '70px' }}>
      <LeftSideHeader />
      <RightSideHeader />
    </div>
  )
}

const LeftSideHeader = () => (
  <div style={{ display: 'flex', order: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', background: '#f00', height: '100%' }}>
    <HeaderLogo />
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)

const RightSideHeader = () => (
  <div style={{ display: 'flex', order: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', background: '#f00', height: '100%' }}>
    <HeaderItem />
  </div>
)

const HeaderItem = () => (
  <div style={{ background: '#009', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%', order: 1 }}>
    Link
  </div>
)

const HeaderLogo = () => (
  <div style={{ background: '#090', flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95%', textAlign: 'center'}}>
    Logo
  </div>
)