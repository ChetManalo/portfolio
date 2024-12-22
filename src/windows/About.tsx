import "./styles/about.scss";
import { FaCode } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <div>
        <h2>Chet Manalo</h2>
        <div id="info">
          <p>
            <span><FaCode /></span>
            Web Dev
          </p>
          <p>
            <span><IoLocationSharp /></span>
            Florida, USA
          </p>
        </div>
      </div>
      <p>Passionate developer creating engaging web applications, eager to learn, solve challenges, and build innovative solutions.</p>
      <div id="icons">
        <button>
          <FiGithub />
          <a target="_blank" href="https://github.com/ChetManalo">https://github.com/ChetManalo</a>
        </button>
        <button>
          <MdEmail />
          <a href="mailto:manalochet01@gmail.com">manalochet01@gmail.com</a>
        </button>
        <button>
          <MdOutlinePhoneIphone />
          <a href="tel:3524288444">(352)-428-8444</a>
        </button>
      </div>
    </section>
  )
}

export default About;