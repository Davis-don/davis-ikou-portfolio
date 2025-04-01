import './homescreen.css'
import Hero from './components/Homepage Hero/Hero'
import Welcomesection from './Homepagewelcome/Welcomesection'
import About from './components/About/About'
import Services from './components/services/Services'
function Homescreen() {
  return (
    <div className='overall-homescreen-container'>
      <Hero/>
      <Welcomesection/>
      <About/>
      <Services/>
        </div>
  )
}

export default Homescreen