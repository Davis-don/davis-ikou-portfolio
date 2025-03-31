import './layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import useSidebarStore from '../../store/useSidebar'

function Mainlayout({children}) {
    const sidebarState = useSidebarStore((state)=>state.sideBar)
  return (
    <>
    {sidebarState && 
        <Sidebar/>
    }
    {!sidebarState && <div className='overall-main-layout'>
        <header>
            <Header/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
        </div>
}
        </>
       
  )
}

export default Mainlayout