import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoMdMenu } from "react-icons/io";
function Header() {
  return (
    <div className='overall-header-container-overall'>
      <div className="left-side-container-header">
      <h3 className='text-light'>Davis</h3>
      </div>
      <div className="right-side-container-header">
      <ul className=" list-unstyled">
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>My Blog</li>
          <li>Contact</li>
        </ul> 

        <div className="menu-icon-bar-header">
          <h1 className='text-light'><IoMdMenu/></h1>
        </div>
      </div>
        {/* <ul className='left-side-logo list-unstyled'>
          <h3 className='text-light'>Davis</h3>
        </ul>
        <ul className="right-side-logo list-unstyled">
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>My Blog</li>
          <li>Contact</li>
        </ul> */}

       
        </div>
  )
}

export default Header