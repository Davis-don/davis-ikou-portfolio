import './homescreen.css'
import Hero from './components/Homepage Hero/Hero'
import Welcomesection from './Homepagewelcome/Welcomesection'
import About from './components/About/About'

function Homescreen() {
  return (
    <div className='overall-homescreen-container'>
      <Hero/>
      <Welcomesection/>
      <About/>
        </div>
  )
}

export default Homescreen