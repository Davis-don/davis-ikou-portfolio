import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoMdMenu } from "react-icons/io";
import useSidebarStore from '../../store/useSidebar';
function Header() {
  const toggleSidebar = useSidebarStore((state)=>state.toggleSidebar)
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

        <div onClick={()=>toggleSidebar()} className="menu-icon-bar-header">
          <h1 className='text-light'><IoMdMenu/></h1>
        </div>
      </div>
    

       
        </div>
  )
}

export default Header