import './layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Mainlayout({children}) {
  return (
    <div className='overall-main-layout'>
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
       
  )
}

export default Mainlayout