import {Link, animateScroll as scroll} from 'react-scroll'

const PageNav = () => {
    return ( 
        <>
            <ul className="fixed top-0 right-0 p-5 text-right">
                <li className="block"><Link 
                to="greeting" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Greeting</span></Link></li>
                <li className="block"><Link 
                to="intro" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Introduction</span></Link></li>
                <li className="block"><Link 
                to="projects" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Projects</span></Link></li>
                <li className="block"><Link 
                to="experience" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Experience</span></Link></li>
                <li className="block"><Link 
                to="tech" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Technology</span></Link></li>
                <li className="block"><Link 
                to="contact" 
                className="relative flex items-center cursor-pointer spy-link"
                activeClass="is-current"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                ><span className="spy-text">Contact</span></Link></li>
            </ul>
        </> 
    );
}

export default PageNav;