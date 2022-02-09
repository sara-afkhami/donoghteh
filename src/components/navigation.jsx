import logo from "./DONOGHTE_LOGO_Donoghte_En_Fulllogo.png"
export const Navigation = (props) => {
  return (

  <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      <a alt="" className="logo" ><img alt="" src={logo}></img></a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a class="nav-link" href="//github.io/jo_geek" target="_blank">About Us</a>
    <a class="nav-link" href="http://stackoverflow.com/users/4084003/" target="_blank">Digital Marketing</a>
    <a class="nav-link" href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Content Creation</a>
    <a class="nav-link" href="https://codepen.io/jo_Geek/" target="_blank">Film & Series</a>
    <a class="nav-link" href="https://codepen.io/jo_Geek/" target="_blank">Art Work</a>
    <a class="nav-link" href="https://codepen.io/jo_Geek/" target="_blank">Career</a>
    <a class="nav-link end" href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Team</a>
    <button className="header-btn">contact us</button>
  </div>
</div>
    // <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    //   <div className='container logo'>
        
    //     <a className=' page-scroll' href='#page-top'>
    //         <img className="" alt="" src={logo}></img>
    //       </a>{' '}

    //       <div
    //       className='collapse navbar-collapse'
    //       id='bs-example-navbar-collapse-1'
    //     >
    //       <ul className='nav navbar-nav navbar-right'>
    //         <li>
    //           <a href='#features' className='page-scroll'>
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#about' className='page-scroll'>
    //             Digital Marketing
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#services' className='page-scroll'>
    //             Content Creation
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#portfolio' className='page-scroll'>
    //             Film & Series
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#testimonials' className='page-scroll'>
    //             Art Work
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#team' className='page-scroll'>
    //             Career
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#contact' className='page-scroll'>
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='btn-custom.active'>
    //             <button  className="header-btn">
    //               join us
    //             </button>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //       <button
    //         type='button'
    //         className='navbar-toggle collapsed'
    //         data-toggle='collapse'
    //         data-target='#bs-example-navbar-collapse-1'
    //       >
    //         {' '}
    //         <span className='sr-only'>Toggle navigation</span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //       </button>
    //   </div>
    // </nav>
  )
}
