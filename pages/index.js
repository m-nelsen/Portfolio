import Head from 'next/head'
import Navbar from "../components/navigation/Navbar"
import Modal from "../components/Modal"
import styles from '../styles/index.module.css'
import "isomorphic-fetch"

class landing extends React.Component{
	constructor(props){
		super(props);
	}

	handleSubmit(event){
		event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
		
		const data = {
			name: name,
			email: email,
			message: message
		}

		fetch('http://localhost:3000/send', {
			method: 'post',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then((res) => {
			res.status === 200 ? console.log("Message sent!") : console.log("Message failed from index.js...");
		  })
    }

	render(){
		return(
			<div>
				<Head>
					<title>Matt Nelsen | WebDev</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				<section className={styles.landing} id="landing">
					<div className={styles.landingContainer}>
						<p>Fullstack |</p>
						<h1>Matt Nelsen</h1>
						<p>| Web Developer</p>
					</div>
				</section>
				<section className={styles.about} id="about">
					<div className={styles.aboutMeContainer}>
						<div className={styles.aboutMe}>
							<h2 className={styles.subHeading}>About Me</h2>
							<p>Hi, I'm Matt Nelsen. I've had an interest in programming from an early age. The summer after my freshman year of high school, I took my first programming class at my local community college. I learned the basics of C++, what a compiler does, and how to solve problems like a programmer. Years later, I graduated college with a BSBA in Information Systems Management and began my first job as a Web Developer. I learned how to work in a real business with real clients.</p>
							<div className={styles.imgContainer}>
								<a href="https://www.linkedin.com/in/matthew-nelsen/" target="_blank"><img className={styles.icon} src="/img/landing/linkedin.svg" alt="linkedin" /></a>
								<a href="https://github.com/m-nelsen/portfolio" target="_blank"><img className={styles.icon} src="/img/landing/github.svg" alt="github" /></a>
								<a href="/resume.pdf" target="_blank"><img className={styles.icon} src="/img/landing/resume.svg" alt="resume" /></a>
							</div>
						</div>
					</div>
					<div className={styles.workHistoryContainer}>
						<div className={styles.workHistory}>
							<p className={styles.whDate}>Oct 2019 - May 2020</p>
							<h3 className={styles.whTitle}>Web Developer & Blogger</h3>
							<p className={styles.whCompany}>Customer Scout</p>
							<p className={styles.whDescription}>I designed and developed webpages as part of a team for automotive dealerships. Maintained websites on a variety of CMS platforms including WordPress, and implemented SEO strategies that helped place clients in top search engine rankings.</p>
						</div>
						<div className={styles.workHistory}>
							<p className={styles.whDate}>Aug 2015 - May 2019</p>
							<h3 className={styles.whTitle}>Student</h3>
							<p className={styles.whCompany}>Northern Arizona University</p>
							<p className={styles.whDescription}>I earned a BSBA in Information Systems and a Certificate of Accounting. As an undergraduate, I took classes such as Programming Principles, Applied Business Intelligence, E-Commerce Strategy, Secure Computer Networks and Systems Analysis and Design.</p>
						</div>
					</div>
				</section>
				<section className={styles.skills} id="skills">
					<h2 className={styles.subHeading}>Skills & Technologies</h2>
					<div className={styles.skillsContainer}>
						<img src="/img/landing/html5.png" alt="HTML5" />
						<img src="/img/landing/css3.png" alt="CSS3" />
						<img src="/img/landing/javascript.png" alt="JavaScript" />
					</div>
					<div className={styles.skillsContainer}>
						<p>HTML5 · CSS3 · JavaScript · React · Node.js · Express.js · Next.js · MongoDB · SQL · Wordpress</p>
					</div>
				</section>
				<section className={styles.projects} id="projects">
					<h2 className={styles.subHeading}>Projects</h2>
					<div className={styles.projectTileContainer}>
						<div className={styles.projectTile}>
							<img className={styles.projectImg} src="/img/landing/project_portfolio.jpg" alt="Portfolio Project Image" />
							<h3 className={styles.projectTitle}>Portfolio</h3>
							<div>
								<a className={styles.projectTileLink} target="_blank" href="https://github.com/m-nelsen/portfolio">View Source Code</a>
								<Modal button={styles.projectModalButton}
									modal={styles.projectModal}
									closeButtonStyle={styles.modalCloseButton}>
									<div className={styles.modalImageContainer}>
										<img src="/img/landing/project_portfolio.jpg" alt="Portfolio Project Image" />
										<div className={styles.modalTechContainer}>
											<h3>Tech Used:</h3>
											<p>React</p>
											<p>Next.js</p>
											<p>CSS3</p>
											<p>Digital Ocean Droplet</p>
										</div>
									</div>
									<div className={styles.modalDescriptionContainer}>
										<p>I built this website using Next.js - a React/JavaScript framework that makes it easier to build server-side rendering and static web applications. It's hosted on a DigitalOcean Droplet, which is essentially a small Linux server in the cloud.</p>
									</div>
									<div className={styles.modalLinkContainer}>
										<a className={styles.projectTileLink} target="_blank" href="https://github.com/m-nelsen/portfolio">View Source Code</a>
									</div>
								</Modal>
							</div>
						</div>
						<div className={styles.projectTile}>
							<img className={styles.projectImg} src="/img/landing/project_laMountains.jpg" alt="L.A. Mountains Project Image" />
							<h3 className={styles.projectTitle}>L.A. Mountains</h3>
							<div>
								<a className={styles.projectTileLink} target="_blank" href="https://github.com/m-nelsen/portfolio">View Source Code</a>
								<Modal button={styles.projectModalButton}
									modal={styles.projectModal}
									closeButtonStyle={styles.modalCloseButton}>
									<div className={styles.modalImageContainer}>
										<img src="/img/landing/project_laMountains.jpg" alt="L.A. Mountains Project Image" />
										<div className={styles.modalTechContainer}>
											<h3>Tech Used:</h3>
											<p>HTML5</p>
											<p>CSS3</p>
											<p>JavaScript</p>
											<p>React</p>
										</div>
									</div>
									<div className={styles.modalDescriptionContainer}>
										<p>This project was originally a take-home test I received when applying for a front-end web developer position. The goal was to turn a PSD (Photoshop Document) into a webpage. View the original PSD <a href="/LA Mountains PSD.jpg" target="_blank">here</a>. This webpage is fully responsive.</p>
									</div>
									<div className={styles.modalLinkContainer}>
										<a className={styles.projectTileLink} target="_blank" href="https://github.com/m-nelsen/portfolio">View Source Code</a>
										<a className={styles.projectTileLink} target="_blank" href="/la-mountains">View Live site</a>
									</div>
								</Modal>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.contact} id="contact">
					<h2 className={styles.subHeading}>Contact Me</h2>
					<div className={styles.formContainer}>
						<form className={styles.contactForm} id="contact-form" onSubmit={this.handleSubmit} method="POST">
							<label htmlFor="name">Name</label>
							<input className={styles.contactInput} id="name" placeholder="Name..." type="text" />
							<label htmlFor="email">Email</label>
							<input className={styles.contactInput} id="email" placeholder="Email..." type="text" />
							<label htmlFor="message">Message</label>
							<textarea className={styles.contactTextarea} name="message" id="message" cols="30" rows="10" maxLength="400" placeholder="Message..."></textarea>
							<input className={styles.contactSubmit} type="submit" value="Submit" />
						</form>
					</div>
				</section>
				<footer className={styles.landingFooter}>
					<a href="https://www.linkedin.com/in/matthew-nelsen/" target="_blank"><img className={styles.iconFooter} src="/img/landing/linkedin.svg" alt="linkedin" /></a>
					<a href="https://github.com/m-nelsen" target="_blank"><img className={styles.iconFooter} src="/img/landing/github.svg" alt="github" /></a>
					<a href="/resume.pdf" target="_blank"><img className={styles.iconFooter} src="/img/landing/resume.svg" alt="resume" /></a>
				</footer>
			</div>
		)
	}
}

export default landing;