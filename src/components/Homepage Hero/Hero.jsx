import './hero.css'
import image1 from '../../assets/teach2givepic1.jpg'
import { FaCertificate } from "react-icons/fa6";

function Hero() {
  return (
    <>
   
    <div className='overall-hero-container'>
        <div className="left-side-container-hero-homepage">
        <h1 className='icon-certified-hero'><FaCertificate/></h1>
        <h1 className='hero-title'>CERTIFIED SOFTWARE ENGINEER</h1>

        <p className='text-light hero-paragraph'>
            I'm Davis, a Full-Stack Web Developer turning ideas into functional, dynamic web solutions.
            </p>
            <button className='btn button-view-work-hero text-light'>View My Work</button>
        </div>

        <div className="right-side-container-hero-homepage">
    <div className="right-side-image-homepage">
        <img src={image1} alt="image" />
    </div>
    
    <div className="right-side-image-opacity"> </div>
        </div>
        </div>




        <div className="on-small-screen-hero">
     <div className="small-screen-text-box">

     <h1 className='icon-certified-hero-small'><FaCertificate/></h1>
        <h1 className='hero-title-small'>CERTIFIED SOFTWARE ENGINEER</h1>

        <p className='text-light hero-paragraph-small container'>
            I'm Davis, a Full-Stack Web Developer turning ideas into functional, dynamic web solutions.
            </p>
            <button className='btn button-view-work-hero-small text-light'>View My Work</button>


     </div>
        </div>

        </>
  )
}

export default Hero