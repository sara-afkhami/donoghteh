const Home = (props) => {
return(


      <div className='intro'>
        <div className='overlay'>
          <div className=''>
            <div className='row'>
            {/* <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
              <source src="" type="video/mp4">
            </video> */}
              <div className='col-md-8 intro-text main'>
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
  

  );}
  export default Home;