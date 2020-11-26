export default function ProgramasSociales() {
  return(
    <div className="landing-section">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}>
        <div className='align-center title' style={{ flex: '1 1 10%' }}>
          Programas sociales
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: '1 1 85%', height: '85%', width: '100%', boxSizing: 'border-box'}}>
          <div style={{ flex: '1 1 80%' }}>
            <img src='https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80' alt='Programa' />
          </div>
          <div style={{ flex: '1 1 20%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className='button button-big'>Call to action</div>
          </div>
        </div>
      </div>
    </div>
  )
}