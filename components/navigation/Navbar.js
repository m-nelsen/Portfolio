import React from "react"
import { Link } from "react-scroll"
import MobileNavMenu from "./MobileNavMenu"
import MobileNavMenuButton from "./MobileNavMenuButton"
import Backdrop from "../Backdrop"

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            showMobileMenu: false
        }
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this)
        this.backdropClickHandler = this.backdropClickHandler.bind(this)
    }

    handleMobileMenuClick(){
        this.setState(prevState => {
            return {showMobileMenu: !prevState.showMobileMenu}
        })
    }

    backdropClickHandler(){
        this.setState({showMobileMenu: false})
    };

    render(){
        let backdrop;

        if (this.state.showMobileMenu) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return(
            <nav className="navbar">
                <MobileNavMenuButton click={this.handleMobileMenuClick} />
                <MobileNavMenu show={this.state.showMobileMenu} />
                {backdrop}
                <div className="navLogo">
                    <Link
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >Matt Nelsen</Link>
                </div>
                <div className="navSpacer"></div>
                <div className="navItem">
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
                </div>
            </nav>
        )
    }
}

export default Navbar