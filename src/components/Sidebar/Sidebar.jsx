import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useSidebarStore from '../../store/useSidebar'

function Sidebar() {
  const toggleState = useSidebarStore((state)=>state.toggleSidebar)
  return (
    <div className='overall-sidebar-container'>
        <ul className=" list-unstyled">
          <li onClick={()=>toggleState()}>Home</li>
          <li onClick={()=>toggleState()}>About</li>
          <li onClick={()=>toggleState()}>Resume</li>
          <li onClick={()=>toggleState()}>Services</li>
          <li onClick={()=>toggleState()}>Skills</li>
          <li onClick={()=>toggleState()}>Projects</li>
          <li onClick={()=>toggleState()}>My Blog</li>
          <li onClick={()=>toggleState()}>Contact</li>
      
        </ul>
        </div>
  )
}

export default Sidebar