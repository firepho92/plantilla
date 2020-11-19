export default function HeaderCentered() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', background: '#900', height: '10vh', minHeight: '70px' }}>
      <LeftSideHeader />
      <CenterHeader />
      <RightSideHeader />
    </div>
  )
}

const LeftSideHeader = () => (
  <div style={{ display: 'flex', flex: 5, order: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', background: '#f00', height: '100%' }}>
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)

const CenterHeader = () => (
  <div style={{ display: 'flex', flex: 2, order: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background: '#0f0', height: '100%' }}>
    <HeaderLogo />
  </div>
)

const RightSideHeader = () => (
  <div style={{ display: 'flex', flex: 5, order: 3, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', background: '#00f', height: '100%' }}>
    <HeaderItem />
    <HeaderItem />
    <HeaderItem />
  </div>
)

const HeaderItem = () => (
  <div style={{ background: '#009', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
    Link
  </div>
)

const HeaderLogo = () => (
  <div style={{ background: '#090', flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95%', textAlign: 'center'}}>
    Logo
  </div>
)