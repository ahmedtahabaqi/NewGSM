import React from 'react';
import Context from '../Context';
import Slider from 'react-slick';
import Component from "@reactions/component";
import ReactPlayer from 'react-player'
import {  Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import ReactTooltip from 'react-tooltip';

class ContentHome extends React.Component {
    constructor() {
        super()
        this.state = {
            course: [],
            packages: [],
            rating: 3.5,
            colors: [' #bce9aa, #20b2aa', '#6e99d6, #b22222', '#ffeb78, #4edeff', '#ea92e0, #ff892a'

            ]
        }

    }

    componentDidMount() {
        axios.get(host + `api/course`, { headers: {} })
            .then(response => {
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
                            <div>
                                <br></br>
                                <h1>Courses</h1>
                            </div>

                            <div id='continerSlider2'>
                                <Slider {...settings} >
                                    {this.state.course.map((cors, i) =>
                                        <div key={cors._id} id='continerNewCard'>
                                            <Component initialState={{ color1: Math.floor(Math.random() * 3) }}>
                                                {({ state, setState }) => (
                                                    <div id='MaincontinerNewCard'>
                                                        <Link to={`/courses/${cors._id}`}>
                                                            <div id='continerNewCard1'>

                                                                <div id='continerNewCard2' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                    <div id='headerNewCard'>
                                                                        <img alt="img" height="150" width="250" src={host + cors.img} />
                                                                    </div>
                                                                    <div id='divReduisCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}></div>
                                                                </div>
                                                                <div id='TitleNewCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>{cors.title}</div>
                                                                <div id='BodyNewCard'>
                                                                    <div id='BodyNewCardImg'>
                                                                        <div>
                                                                            <pre id="CorsSubT" data-tip={cors.sub_title}>{cors.sub_title}</pre>
                                                                            <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='BodyNewCardAut'>
                                                                        <img id='authCardImg' src={host + cors.userImg} alt='img'></img>
                                                                        <div id='authCardTitle'>
                                                                            <p>Author :<br />
                                                                                {cors.userName}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div id='btnBuyNewCardPrice'>{cors.price[cors.__v]} $</div>

                                                                    <div id='btnBuyNewCard'>

                                                                        <Button marginRight={16} intent="danger"> Buy Now</Button>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </Link>
                                                    </div>
                                                )}
                                            </Component>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                            <div>
                                <h3>Feel Comfortable</h3>
                                <h2>
                                    Our Team Works 7 Days a Week Just to Make the Complex Medical Concepts as Simple &<br />
                                    Beloved as Your Favorite Piece of Music </h2>
                                <h6>Best Regards <br />
                                    <span style={{ color: 'red' }}>G</span>SM CEO - DR.Harith Alawadi</h6>
                            </div>
                        </div>
                        <div id='videoHomeContiner'>
                            <div id='videoHometitle'>GET TO KNOW US</div>
                            <div id='videoHomeContiner1'>
                                <ReactPlayer id='v1' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336057224/37fe80a268'} playsinline={true} controls />
                                <ReactPlayer id='v2' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336058669/1e4e9dc0ca'} playsinline={true} controls />
                                <ReactPlayer id='v3' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336058976/8bb930753d'} playsinline={true} controls />
                            </div>
                            <div id='videoHomeContiner2'>
                                <ReactPlayer id='v4' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336059149/7108d01261'} playsinline={true} controls />
                                <ReactPlayer id='v5' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336059946/3a257c3b43'} playsinline={true} controls />
                                <ReactPlayer id='v6' width={'33vw'} height={'19vw'} url={'https://vimeo.com/336060739/7180730e85'} playsinline={true} controls />
                            </div>
                        </div>
                        <div id='homePackagesContiner'>
                            <div >

                                <img id='bgcPackage' src={require('../../assets/bgcPackage.png')} alt='img' />
                                <div>
                                    <div >
                                        <Link to='/diamond'>
                                            <img id='daimond' src={require('../../assets/daimond.png')} alt='img' />
                                        </Link>
                                        <div>
                                                <div id='details1' data-tip='Postgraduate & Undergraduate'>Details</div>
                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/platinum'>
                                            <img id='platinum' src={require('../../assets/platinum.png')} alt='img' />
                                        </Link>
                                        <div>
                                        <div id='details2' data-tip='Step1 & Step2'>Details</div>
                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                                        </div>

                                    </div>
                                    <div>
                                        <Link to='/gold'>
                                            <img id='gold' src={require('../../assets/gold.png')} alt='img' />
                                        </Link>
                                        <div>
                                        <div id='details3' data-tip='Step 2'>Details</div>
                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                                        </div>

                                    </div>
                                    <div>
                                        <Link to='/silver'>
                                            <img id='selver' src={require('../../assets/selver.png')} alt='img' />
                                        </Link>
                                        <div>
                                        <div id='details4' data-tip='Step1'>Details</div>
                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <br></br>
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
