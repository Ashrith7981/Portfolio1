import { useState } from 'react'
import reactLogo from './assets/Profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css'
import Contact from './contact'; 
import resumePdf from './assets/resume.pdf';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="main">
      
      <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Languages">Languages</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#About">About me</a></li>
        </ul>
        <a href="#contact" className="contact-btn">Contact</a>
      </div>
    </nav>
  <div className="hero">
  <div className="con1">
    <p className="name">
  <span className="h">Hi,</span>
  <span className="j"> I'm</span> KANAGANI ASHRITH
</p>

    <h2 className="tagline">
  <span className='k'>Aspiring Software</span> Developer
</h2>

    <p className="intro">
      Driven by a passion for technology, I specialize in crafting efficient, scalable, and elegant software solutions that solve real-world problems.
    </p>
    <div className="buttons">
      <a href="https://github.com/Ashrith7981" className="btn">Github Profile</a>
      <a
  href={resumePdf}
  download="Kanagani_Ashrith_Kumar_Resume.pdf"
  className="btn btn-outline"
  rel="noopener noreferrer"
>
  Download Resume
</a>

    </div>
<div className="social-icons">
  <div className="social1">
  <a href="https://www.linkedin.com/in/ashrith-bb5155287/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="icon" />
  </a>
  </div>
  <div className="social1">
  <a href="https://www.instagram.com/_ashrith_25?igsh=NmhheGZmMXNzbWo3" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="icon" />
  </a>
  </div>
  <div className="social1">
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faXTwitter} className="icon" />
</a>
</div>
    <div className="social11">
    <a
  href="https://leetcode.com/u/ashrith_34/"
  target="_blank"
  rel="noopener noreferrer"
  className="social1"
>
  <img
    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg"
    alt="LeetCode"
    className="leetcode-icon"
  />
</a>

</div>
</div>
  </div>
  <div className="right">
  <div className="image-frame">
    <img src={reactLogo} alt="Profile" className="profile-pic" />
  </div>
</div>
</div>
<div className='kk'></div>
<div id='Services' className='about-section'>
  <h2>Services</h2>
  <p>Building digital journeys that connect and inspire.</p>
  <div className='con2'>
    <div className="s-card">
    <div className="icon-container">🖥️</div>
    <h3>Web Development</h3>
    <p>Designing responsive and engaging websites tailored to user needs.</p>
  </div>
  <div className="s-card">
    <div className="icon-container">📱</div>
    <h3>App Development</h3>
    <p>Crafting seamless and user-friendly mobile and desktop applications.</p>
  </div>

  <div className="s-card">
    <div className="icon-container">🧠</div>
    <h3>Generative AI</h3>
    <p>Exploring creative and efficient AI-driven solutions for modern challenges.</p>
  </div>
  <div className='s-card'>
    <div className='icon-container'>☁️</div>
    <h3>Cloud Computing</h3>
    <p>Leveraging scalable cloud infrastructure to deploy and manage modern applications.</p>
  </div>
  </div> 
</div>
<div className='kk'></div>
<div id='Languages' className='about-section'>
<h2>Languages</h2>
<p className="lang-intro">Technologies and languages I'm familiar with:</p>
  <div className="l-grid">
    <div className="l-card">Python</div>
    <div className="l-card">C</div>
    <div className="l-card">C++</div>
    <div className="l-card">Java</div>
    <div className="l-card">HTML</div>
    <div className="l-card">CSS</div>
    <div className="l-card">JavaScript</div>
    <div className="l-card">SQL</div>
  </div>
</div>
<div className='kk'></div>
<div id='Projects' className='about-section'>
<h2>Projects</h2>
 <div className="project-wrapper">
    <a
      href="https://htmqvbna7mwichwjmiaamu.streamlit.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="icon-container">🤖</div>
      <h3 className="project-title">GenAI</h3>
      <p className="project-text">
        Developed a GenAI‑powered analyzer that processes customer feedback,
        performs sentiment classification and generates performance summaries.
      </p>
    </a>
  </div>
</div>
<div className='kk'></div>
<div id="About" className="about-section">
  <h2>About Me</h2>
  <p>
    Welcome to my portfolio! I'm Ashrith, a passionate and driven developer who loves building apps and websites that make a real impact. From intuitive user interfaces to smart, scalable backends, I enjoy solving challenges through code.  
  <br /><br />
  My curiosity recently led me into the world of Generative AI, where I'm exploring how technology can enhance creativity and automation. I constantly work on projects to sharpen my skills and stay at the cutting edge. Let's build something amazing together!
  </p>
  <div className='kk'></div>
</div>
    <div id="contact">
  <Contact />
</div>

</div>

    </>
  )
}

export default App
