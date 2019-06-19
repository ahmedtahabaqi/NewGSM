import React from 'react';
import Component from "@reactions/component";
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import "react-alice-carousel/lib/alice-carousel.css";



class FooterHome extends Component {

    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    };
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,


            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },

            ]

        }
        return (
            <div id='footercontiner'>
                <div id='OurTeamContiner' >
                    <h1 id='OURTEAM_title'>OUR TEAM</h1>
                    <div id='ourTeamSliderContiner'>
                        <Slider {...settings} >
                          
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR.HARITH ALAWADI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.HARITH ALAWADI</p>
                                    <p id='titleourTeamCard1'>CEO&FOUNDER</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard'
                                        src={require('../../assets/team/DR.ALI ALWAILY.jpg')}
                                        alt="Generic placeholder"
                                    />
                                    <p id='titleourTeamCard'>DR.ALI ALWAILY </p>
                                    <p id='titleourTeamCard1'>CO-FOUNDER</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. DANI MAMO.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.DANI MAMO,MD</p>
                                   
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. KARRAR MAHDI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.KARRAR MAHDI,MD</p>
                                    
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/AHMED SAMEER.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>AHMED SAMEER</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/BILAL HUSSEIN.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>BILAL HUSSEIN</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/MUTHANNA ALAMI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>MUTHANNA ALAMI </p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/NANCY JOSEPH.png')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>NANCY JOSEPH</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/ALI YOUSIF.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>ALI YOUSIF</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/HUMAM ADNAN AL-OBAIDI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>HUMAM ADNAN AL-OBAIDI</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/OMAR ALFAROOQ AL-OBAIDI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>OMAR ALFAROOQ <br/>AL-OBAIDI</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/Dr.Mohammed Elward.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>Dr.Mohammed Elward</p>
                                    <p id='titleourTeamCard1'>Emergency Hospital Of Bu-<br/>charest Orthopedics</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/RUQAYA SAMEER.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>RUQAYA SAMEER</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR.ABDULLAH ALKHATEEB1.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.ABDULLAH ALKHATEEB</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR.ALI ALJOBORY .jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.ALI ALJOBORY</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. HAYDER ALSLMAWY.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.HAYDER ALSLMAWY</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR.AHMED ALDAWOODI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.AHMED ALDAWOODI</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. ABDULHADI KUMAIT.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.ABDULHADI KUMAIT</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. SAJA HAMED ALAMI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.SAJA HAMED ALAMI</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/DR. ZIYAD TARIQ ALWAILY.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>DR.ZIYAD TARIQ ALWAILY</p>
                                    <p id='titleourTeamCard1'>DENTIST</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/AHMED ALZAEDY.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>Ahmed Alzaedy</p>
                                    <p id='titleourTeamCard1'>VOCALS AND DIRECTOR</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/team/ABDULLAH ALAWADI.jpg')}
                                        alt="Generic placeholder" 
                                    />
                                    <p id='titleourTeamCard'>ABDULLAH ALAWADI</p>
                                 <p id='titleourTeamCard1'>LAWYER</p>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </div>
                <div id='barinstructorContiner'>
                    <img id='logoInstructour' src={require('../../assets/pngz.png')} alt="img" />
                    <div id='btn_InstrctorContiner'>
                        <div id='pargrapBforeBtn'>Become an</div>
                        <span id='btn_Instrctor'>Instructor</span>
                    </div>

                </div>
                <div id='newFooterContiner'>
                    <span id='New_FooterRow1'>Teach What You Love, G.S.M Gives You The Opportunity And The Tool To Create An Online Courses.</span>
                    <div id='New_FooterRow2'>
                        <Link id='trustedby_BTN' to="/trustedby"><span id='trustedby_BTN'>Trusted By</span></Link>
                        <Link id='TermsOfService_BTN' to="/tearmsOfService">  <span id='TermsOfService_BTN'>Terms Of Service</span></Link>
                        <Link id='GSMTeam_BTN' to="/gsmteam">    <span id='GSMTeam_BTN'>G.S.M Team</span></Link>
                        <Link id='ContactUs_BTN' to="/contactus"><span id='ContactUs_BTN'>Contact Us</span></Link>
                        <Link id='AboutUs_BTN' to="/aboutus"><span id='AboutUs_BTN'>About Us</span></Link>
                    </div>
                    <div id='New_FooterRow3'>
                        <div id='LOGANDCOPY'>
                            <div>
                                
                                <img  onClick={() => {  window.location.href = "#continer_header" }}
                                id='logoFOOTER' src={require('../../assets/pngz.png')} alt="img" />
                             
                            </div>
                            <div id='CORY_RIGHT'>Copyright © 2019</div>
                        </div>
                        <div id='Socil_BTN'>
                            <a href='https://www.facebook.com/GSM-Medical-Education-2305929739630350/'>
                                <img width={50} id='SosialLOGO' src={require('../../assets/facebook.png')} alt="img" />
                            </a>
                            <a href=' https://www.instagram.com/gsmmed.education/'>
                                <img width={50} id='SosialLOGO' src={require('../../assets/instagram.png')} alt="img" />
                            </a>
                            <a href='https://twitter.com/GsmMedicalEdu'>
                                <img width={50} id='SosialLOGO' src={require('../../assets/twitter.png')} alt="img" />
                            </a>
                            <a href='https://www.youtube.com/channel/UCjEa0e1n5nsN4RUAYRe0c2A?view_as=subscriber'>
                                <img width={50} id='SosialLOGO' src={require('../../assets/youtube.png')} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: '#000', top: '43%', borderRadius: '50%' }}
            onClick={onClick}
            id="arownext"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            id="arownext"
            style={{ ...style, backgroundColor: '#000', top: '43%', borderRadius: '50%', zIndex: 1 }}
            onClick={onClick}
        />
    );
}
export default FooterHome;
