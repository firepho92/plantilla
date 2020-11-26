export default function TiendasPlataformasFooter() {
  return(
    <div className="landing-section">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%' }}>
        {/* tiendas y plataformas */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: '1' }}>Tiendas</div>
            <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: '1' }}></div>
              <div style={{ flex: '1' }}></div>
              <div style={{ flex: '1' }}></div>
            </div>
          </div>
          <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: '1' }}>Plataformas</div>
            <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: '1' }}></div>
              <div style={{ flex: '1' }}></div>
              <div style={{ flex: '1' }}></div>
            </div>
          </div>
        </div>
        {/*Footer*/}
        <div style={{ flex: '1 1 50%', width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}></div>
        </div>
      </div>
    </div>
  )
}