export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className=''>
            <div className='row'>
              <div className='col-md-8 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.preParagraph : 'Loading'}</p>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
