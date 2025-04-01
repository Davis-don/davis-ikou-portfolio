import './about.css'
import soloImg from '../../assets/solo-photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
function About() {
  return (
    <div className='overall-about-container'>
        <div className="left-side-about-section">
      <img src={soloImg} alt="new" className='img-fluid' />
        </div>
        <div className="right-side-about-section">
            <h1>MEET DAVIS</h1>
            <p> I am a Full-Stack Software Engineer with expertise in JavaScript, React.js, Node.js, TypeScript, and cloud computing. With a Bachelor of Science in Mathematics and Computer Science from Murang'a University of Technology, I have developed strong analytical and problem-solving skills that enable me to build scalable and efficient software solutions. My technical background is complemented by hands-on experience in software development, agile methodologies, and software testing.</p>
            <p>I have gained valuable experience through roles such as Graduate Student at TEACH2GIVE, where I honed my skills in full-stack development, and Technical Trainer at Kiharu Technical, where I delivered ICT and Mathematics training. Additionally, as an IT Specialist at KIRU Tea Factory, I optimized hardware reliability and system performance. My commitment to learning and growth is evident through my participation in the Power Learn Project Software Development Scholarship, which has further strengthened my technical expertise.</p>
            <p>I am passionate about technology education, mentorship, and developing impactful solutions. Open to opportunities in Full-Stack Engineering, React Development, and JavaScript Development, I aim to contribute to innovative projects that leverage my skills in modern web technologies. Let’s connect and collaborate!</p>

            <button className='btn btn-lg btn-download-cv text-light'>Download Cv</button>
        </div>
        </div>
  )
}

export default About