import './services.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import frontend from '../../assets/frontend.svg'
import backend from '../../assets/backend.svg'
import deployment from '../../assets/deployment.svg'
import ux from '../../assets/uiux.svg'


function Services() {
  return (
    <div className='overall-whyus-container'>
        <h1 className='whyus-softwares-heading text-light'>Services</h1>

        <div className="why-cards-home">
        <div className="why-card-home pricing-card container">  
            <h3 className='text-light'>UI/UX Designing</h3>
            <p className='text-light'>I provide clear and transparent UI/UX designing with no surprises—so you always know what to expect.
</p>
                <div className="icon-why-holder rounded-circle">
                <img src={ux} alt="icon" />

                </div>
            </div>


            <div className="why-card-home mentorship-card container">  
            <h3 className='text-light'>Frontend Development</h3>
            <p className='text-light'>I deliver clean and efficient frontend development with no surprises—ensuring a seamless and reliable experience</p>
                <div className="icon-why-holder rounded-circle">
                <img src={frontend} alt="icon" />

                </div>
            </div>

            <div className="why-card-home programming-card container">  
            <h3 className='text-light'>Backend development</h3>
            <p className='text-light'>I provide robust and scalable backend development with no surprises—ensuring a secure and efficient foundation.</p>
                <div className="icon-why-holder rounded-circle">
                <img src={backend} alt="icon" />

                </div>
            </div>

            <div className="why-card-home deliverly-card container">  
            <h3 className='text-light'>Deployment & Maintainance</h3>
            <p className='text-light'>We respect deadlines and ensure that your project is completed on time without compromising quality.</p>
                <div className="icon-why-holder rounded-circle">
                <img src={deployment} alt="icon" />

                </div>
            </div>


           
        </div>
        </div>
  )
}

export default Services