import { Link } from 'react-router-dom';
import logo from "./DONOGHTE_LOGO_Donoghte_En_Fulllogo.png"

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  if (page === "header") {
    return  <Link to={"/"} className="nav-link">{title}</Link>;
  }
  else if (page === "gallery") {
    return  <Link to={`/${page}`} className="nav-link last-link">{title}</Link>;
  }
  else return <Link to={`/${page}`} className="nav-link">{title}</Link>;

};
const Header = (props) => {
    return (
      
  <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      <a alt="logo" className="logo" href="#"><img alt="" src={logo}></img></a>
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <HeaderLink page='header'/>
    <HeaderLink page='contactus'/>
    <HeaderLink page='career'/>
    <HeaderLink page='gallery'/>

    <button className="header-btn">contact us</button>
  </div>
</div>
    );
  };
  
  export default Header;