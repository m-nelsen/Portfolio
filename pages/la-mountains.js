import Head from 'next/head'
import Carousel from '../components/Carousel';
import Tabs from "../components/Tabs"
import styles from '../styles/la-mountains.module.css'

class laMountains extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isScrolledPastStickyNav: false,
            stickyNavHeight: 0
        }

        const tabs = [
            { label: "Tab 1", value: 1 },
            { label: "Tab 2", value: 2 }
        ];

        this.setScrolledPastStickyNav = this.setScrolledPastStickyNav.bind(this);
    }

    setScrolledPastStickyNav(x){
        this.setState({isScrolledPastStickyNav: x});
    }

    componentDidMount(){
        let header = document.getElementsByClassName(`${styles.navbar}`);
        let sticky = header[0].offsetTop;
        this.setState({stickyNavHeight: header[0].clientHeight});
        
        window.onscroll = () => {
            if (window.pageYOffset > sticky) {
                header[0].classList.add(`${styles.sticky}`);
                this.setScrolledPastStickyNav(true);
            } 
            else {
                header[0].classList.remove(`${styles.sticky}`);
                this.setScrolledPastStickyNav(false);
            }
        }
    }

    render(){
        return(
            <div className={styles.laMountains}>
                <Head>
                    <title>L.A. Mountains</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" 
                          content="initial-scale=1.0, width=device-width" />
                </Head>
                <nav className={styles.navbarRelative}>
                    <img src="/img/la-mountains/logo1.png" alt="LA Mountains Logo"></img>
                    <div className={styles.navSpacer}></div>
                    <a href="#">01. History</a>
                    <a href="#">02. Team</a>
                </nav>
                <div className={`${styles.backgroundCover} ${styles.bg1}`}
                     style={this.state.isScrolledPastStickyNav ? {marginTop: this.state.stickyNavHeight} : {marginTop: "0px"}}></div>
                <nav className={styles.navbar}>
                    <img src="/img/la-mountains/logo1.png" alt="LA Mountains Logo"></img>
                    <img src="/img/la-mountains/logo2.png" alt="LA Mountains Text"></img>
                    <div className={styles.navSpacer}></div>
                    <a href="#">01. History</a>
                    <a href="#">02. Team</a>
                </nav>
                <div className={`${styles.backgroundCover} ${styles.bg2}`}>
                    <div className={styles.historyContainer}>
                        <div className={styles.headerContainer}>
                            <h2>01.</h2>
                            <h3>HISTORY</h3>
                        </div>
                        <p className={styles.historyParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus hendrerit sem ac pretium. Mauris fermentum scelerisque eros porta tincidunt. Pellentesque tristique vestibulum elit, non varius sem sollicitudin vitae. Aenean felis magna, tincidunt eu sodales sed, iaculis sed nibh. Donec fringilla nibh a consequat luctus. Vestibulum eget nisl felis.</p>
                    </div>
                    <div className={styles.navSpacer}></div>
                    <div className={styles.carouselOverlay}>
                        <Carousel style={styles.carousel}
                                activeImg={styles.activeImg}
                                inactiveImg={styles.inactiveImg}>
                            <img className={styles.inactiveImg} src="/img/la-mountains/thumbnail.png" alt="Carousel Thumbnail" key="0" />
                            <img className={styles.activeImg} src="/img/la-mountains/thumbnail2.png" alt="Carousel Thumbnail" key="1" />
                            <img className={styles.inactiveImg} src="/img/la-mountains/thumbnail.png" alt="Carousel Thumbnail" key="2" />
                            <img className={styles.inactiveImg} src="/img/la-mountains/thumbnail2.png" alt="Carousel Thumbnail" key="3" />
                        </Carousel>
                    </div>
                </div>
                <div className={`${styles.climbSection} ${styles.contentMargin}`}>
                    <div className={`${styles.headerContainer} ${styles.climbHeader}`}>
                        <h2>02.</h2>
                        <h3>CLIMB</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus hendrerit sem ac pretium. Mauris fermentum scelerisque eros porta tincidunt. Pellentesque tristique vestibulum elit, non varius sem sollicitudin vitae.</p>
                </div>
                <Tabs   tabList={styles.tabList} 
                        tabs={styles.tabs} 
                        tabContent={styles.tabContent} 
                        tabListItem={styles.tabListItem} 
                        tabListActive={styles.tabListActive}
                    > 
                    <div label="MOUNTAIN 1"> 
                        <div className={`${styles.backgroundCover} ${styles.bg3} ${styles.scheduleSpacer}`}>
                            <div className={styles.scheduleContainer}>
                                <h4>SCHEDULE</h4>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>25 Nov 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>28 Nov 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}><div>&nbsp;</div></div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>18 Dec 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}><div>&nbsp;</div></div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>7 Jan 2017</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div label="MOUNTAIN 2"> 
                        <div className={`${styles.backgroundCover} ${styles.bg4} ${styles.scheduleSpacer}`}>
                            <div className={styles.scheduleContainer}>
                                <h4>SCHEDULE</h4>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>17 Nov 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}><div>&nbsp;</div></div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>13 Dec 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>28 Dec 2016</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                                <div className={styles.row}><div>&nbsp;</div></div>
                                <div className={styles.row}>
                                    <div className={styles.column}><p>9 Feb 2017</p></div>
                                    <div className={styles.column}><p>Vestibulum viverra</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
                <footer className={styles.myFooter}>
                    <div className={styles.footerOverlay}></div>
                    <img src="/img/la-mountains/logo1.png" alt="LA Mountains Logo"></img>
                    <img src="/img/la-mountains/logo3.png" alt="LA Mountains Text"></img>
                    <div className={styles.navSpacer}></div>
                    <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </footer>
            </div>
        )
    }
}

export default laMountains;