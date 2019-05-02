import React from 'react';
import Component from "@reactions/component";
import { Dialog, Pane } from 'evergreen-ui';
import { Button, Tab } from 'evergreen-ui';
import AliceCarousel from 'react-alice-carousel';
import { Media, Image, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
                <div id='OurTeamContiner'>
                    <h1 id='OURTEAM_title'>OUR TEAM</h1>
                    <div id='ourTeamSliderContiner'>
                        <Slider {...settings} >
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard'
                                        src={require('../../assets/ALI ALWAILY.png')}
                                        alt="Generic placeholder"
                                    />
                                    <p id='titleourTeamCard'>DR.ALI ALWAILY </p>
                                    <p id='titleourTeamCard1'>CO-FOUNDER</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/HARITH ALAWADI.png')}
                                        alt="Generic placeholder" roundedCircle
                                    />
                                    <p id='titleourTeamCard'>DR.HARITH ALAWADI</p>
                                    <p id='titleourTeamCard1'>CEO&FOUNDER</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/NANCY.png')}
                                        alt="Generic placeholder" roundedCircle
                                    />
                                    <p id='titleourTeamCard'>DR.NANCY JOSEPH</p>
                                    <p id='titleourTeamCard1'>MD STUDENT</p>
                                </div>
                            </div>
                            <div>
                                <div id='cardOurTeam' >
                                    <img id='imageOurteamCard' className="align-self-start mr-3"
                                        src={require('../../assets/HARITH ALAWADI.png')}
                                        alt="Generic placeholder" roundedCircle
                                    />
                                    <p id='titleourTeamCard'>DR.HARITH ALAWADI</p>
                                    <p id='titleourTeamCard1'>CEO&FOUNDER</p>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </div>
                <div id='barinstructorContiner'>
                    <img id='logoInstructour' src={require('../../assets/pngz.png')} alt="img" />
                    <div id='btn_InstrctorContiner'>
                        <span id='pargrapBforeBtn'>Become an</span>
                        <div id='btn_Instrctor'>Instructor</div>
                    </div>

                </div>
                <div id='newFooterContiner'>
                    <span id='New_FooterRow1'>Teach What You Love, G.S.M Gives You The Opportunity And The Tool To Create An Online Cources.</span>
                    <div id='New_FooterRow2'>
                        <span id='trustedby_BTN'>Trusted By</span>
                        <span id='TermsOfService_BTN'>Terms Of Service</span>
                        <span id='GSMTeam_BTN'>G.S.M Team</span>
                        <span id='ContactUs_BTN'>Contact Us</span>
                        <span id='AboutUs_BTN'>About Us</span>
                    </div>
                    <div id='New_FooterRow3'>
                        <div id='LOGANDCOPY'>
                            <div>
                                <img id='logoFOOTER' src={require('../../assets/pngz.png')} alt="img" />
                            </div>
                            <div id='CORY_RIGHT'>Copyright © 2019</div>
                        </div>
                        <div id='Socil_BTN'>
                            <img id='SosialLOGO' src={require('../../assets/facebook.png')} alt="img" />
                            <img id='SosialLOGO' src={require('../../assets/instagram.png')} alt="img" />
                            <img id='SosialLOGO' src={require('../../assets/twitter.png')} alt="img" />
                            <img id='SosialLOGO' src={require('../../assets/youtube.png')} alt="img" />
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
