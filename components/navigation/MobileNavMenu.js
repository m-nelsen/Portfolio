import React from "react"
import { Link } from "react-scroll"

function MobileNavMenu(props){
    
    let mobileNavClass = "mobileNavMenu";
    if (props.show) {
        mobileNavClass = "mobileNavMenu open";
    }

    return(
        <nav className={mobileNavClass}>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >About</Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >Skills</Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >Projects</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >Contact</Link>
        </nav>
    )
}

export default MobileNavMenu