import './homescreen.css'
import Hero from './components/Homepage Hero/Hero'
import Welcomesection from './Homepagewelcome/Welcomesection'

function Homescreen() {
  return (
    <div className='overall-homescreen-container'>
      <Hero/>
      <Welcomesection/>
        </div>
  )
}

export default Homescreen