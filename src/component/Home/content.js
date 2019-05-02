import React, { Component } from 'react';
import Context from '../Context';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';
import ReactPlayer from 'react-player'
import { Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';

class ContentHome extends Component {
    constructor() {
        super()
        this.state = {
            course: [],
            packages: [],
            rating: 3.5
        }

    }

    componentDidMount() {
        axios.get(host + `api/course`, { headers: {} })
            .then(response => {
                console.log(response.data);

                this.setState({ course: response.data })
            })
            .catch((error) => { console.log('error ' + error) })

        axios.get(host + `api/course/Package`, { headers: {} })
            .then(response => {
                this.setState({ packages: response.data })
            })
            .catch((error) => { console.log('error ' + error) })

    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,


            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 980,
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
                {
                    breakpoint: 525,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div >
                        <div id='bgcCourses'>
                            <di><h1>Courses</h1></di>

                            <div id='continerSlider2'>
                                <Slider {...settings} >
                                    {this.state.course.map(cors =>
                                        <div key={cors._id} id='continerNewCard'>
                                            <div id='MaincontinerNewCard'>
                                                <div id='continerNewCard1'>
                                                    <div id='continerNewCard2'>
                                                        <div id='headerNewCard'> </div>
                                                        <div id='divReduisCard'></div>
                                                    </div>
                                                    <div id='TitleNewCard'>{cors.title}</div>
                                                    <div id='BodyNewCard'>
                                                        <div id='BodyNewCardImg'>
                                                            <div>
                                                                <img height='80px' width='200px' src={host + cors.img} alt="img" />
                                                            </div>
                                                        </div>
                                                        <div id='BodyNewCardAut'>
                                                            <img id='authCardImg' src={require('../../assets/Dr Karrar mahdi.jpg')} alt='img'></img>
                                                            <div id='authCardTitle'>
                                                                <p>Auther :<br />
                                                                    {cors.userName}</p>
                                                            </div>
                                                        </div>
                                                        <div id='btnBuyNewCardPrice'>{cors.price} </div>
                                                        <div id='btnBuyNewCard'>

                                                            <Button marginRight={16} intent="danger"> Buy Now</Button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                            <div>
                                <h3>Feel Comfortable<br />
                                    Our Team Works 7 Days a Week Just to Make the Complex Medical Concepts as Simple &<br />
                                    Beloved as Your Faverite Piece of Music </h3>
                                <h6>Best Regards <br />
                                    GSM CEO - DR.Harith Alawadi</h6>
                            </div>
                        </div>
                        <div id='videoHomeContiner'>
                            <div id='videoHometitle'>GET TO KNOW US</div>
                            <div id='videoHomeContiner1'>
                                <ReactPlayer id='v1' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />
                                <ReactPlayer id='v2' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />
                                <ReactPlayer id='v3' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />

                            </div>
                            <div id='videoHomeContiner2'>
                                <ReactPlayer id='v4' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />
                                <ReactPlayer id='v5' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />
                                <ReactPlayer id='v6' width={'33vw'} height={'19vw'} url={require('../../assets/video1.mp4')} light={true} playsinline={true} controls />

                            </div>
                        </div>
                        <div id='homePackagesContiner'>
                            <div >
                                <img id='bgcPackage' src={require('../../assets/bgcPackage.png')} alt='img' />
                                <div>
                                    <div >
                                        <img id='daimond' src={require('../../assets/daimond.png')} alt='img' />
                                        <div>
                                            <div id='details1'>Details</div>
                                            <img id='daimondShop' src={require('../../assets/shopping.png')} alt='img' />
                                        </div>
                                        <span id='daimondPrice'>19.99 $</span>
                                    </div>
                                    <div>
                                        <img id='platinum' src={require('../../assets/platinum.png')} alt='img' />
                                        <div>
                                            <div id='details2'>Details</div>
                                            <img id='platinumShop' src={require('../../assets/shopping.png')} alt='img' />
                                        </div>
                                        <span id='platinumPrice'>19.99 $</span>
                                    </div>
                                    <div>
                                        <img id='gold' src={require('../../assets/gold.png')} alt='img' />
                                        <div>
                                            <div id='details3'>Details</div>
                                            <img id='goldShop' src={require('../../assets/shopping.png')} alt='img' />
                                        </div>
                                        <span id='goldPrice'>19.99 $</span>
                                    </div>
                                    <div>
                                        <img id='selver' src={require('../../assets/selver.png')} alt='img' />
                                        <div>
                                            <div id='details4'>Details</div>
                                            <img id='selverShop' src={require('../../assets/shopping.png')} alt='img' />
                                        </div>
                                        <span id='selverPrice'>19.99 $</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: 'rgb(135, 207, 133)', top: '50%', borderRadius: '50%' }}
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
            style={{ ...style, backgroundColor: 'rgb(135, 207, 133)', top: '50%', borderRadius: '50%', zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export default ContentHome;
