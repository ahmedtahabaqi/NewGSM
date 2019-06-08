import React, { Component } from 'react';
import Context from '../Context';
// import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div id='aboutUsContiner'>
                        {/* <NavbarAllPage /> */}
                        <div id="headerAboutUs">
                            About us
                            </div>
                        <div id='partOneContiner'>
                            <span>Welcome to </span>
                            <img height={30} src={require('../../assets/pngz.png')} alt='img' />
                            <span><span style={{ color: '#cb8f9b' }}> G</span>.S.M MEDICAL EDUCATION</span>
                        </div>
                        <div id='partOneContent'>
                            <span>The first medical website of its kind which specifically targets medical field students ,
                                <br />practitioners and physicians of Arabic world.
                            </span>
                        </div>
                        { /*///////////////////////////////////////////////////// */}
                        <div id='partTowContiner'>
                            <div id='notebookContiner'> <img id='notebookimg' src={require('../../assets/notebook.png')} alt='img' /></div>
                            <div>
                                <div id='partTowContent1'>
                                    <span>As Medical Doctors </span>
                                    <img height={80} src={require('../../assets/doctor.png')} alt='img' />
                                    <span> and according to our Humble</span>
                                </div>
                                <div id='partTowContent2'>
                                    <spn>experience in European countries </spn>
                                    <img height={40} src={require('../../assets/european-union.png')} alt='img' />
                                    <span> ,so far, we have witnessed </span>
                                    <img height={80} src={require('../../assets/witness.png')} alt='img' />
                                    <div id='partTowContent2Extend'>
                                        <div>
                                            <p>a highly qualified educational systems  </p>
                                            <p>he amazing medical facilities here in addition to that:</p>
                                            <p style={{ fontSize: 14 }}>the most important issue we have witnessed is the great effort  that these countries
                                        are putting to get the most educated and  skilled doctors after all. meanwhile we
                                        have experienced and felt the difficulties that foreign students face during their
                                        studying  process and how they suffer through their journey in this system as we were
                                        involved personally in the process and of course also the unfortunate situations
                                        in the Arabic region as many of these countries have very deteriorated educational
                                        systems specially in this vitally important part (health care system).
                                    </p>
                                        </div>
                                        <img id='bigImageAbuoutUs' src={require('../../assets/simulation.png')} alt='img' />
                                    </div>
                                </div>


                            </div>
                        </div>
                        { /*///////////////////////////////////////////////////// */}

                        <div id='partthreeContiner'>
                            <p id='partthreetitle'>And here came the surprise :</p>
                            <div id='partthreeContent1'>
                                <div>personally as a founder </div>
                                <div id='partthreeContent1Extend'>
                                    <img id='Dr-Harith-img' src={require('../../assets/jsn.png')} alt='img' />
                                    <div style={{ fontSize: 14, textAlign: 'center' }}>Dr.Harith Alawadi</div>
                                </div>
                                <div id='lastes'> I was struggling within myself and my soul ,asking </div>
                            </div>
                            <div id='partthreeContent2'>
                                myself how can I take a stand toward it and after almost 2.5 years of multiple failed attempts
                            </div>
                            <div style={{ marginTop: 20 }}></div>
                            <div id='partthreeContent1'>
                                <div>I (Dr.Harith Alawadi) and the co-founder </div>
                                <div id='partthreeContent1Extend'>
                                    <img id='Dr-Harith-img' src={require('../../assets/jsn1.png')} alt='img' />
                                    <div style={{ fontSize: 14, textAlign: 'center' }}>Dr. Ali Alwaily</div>
                                </div>
                                <div id='lastes'> have decided to start the revolution </div>
                                <img height={50} src={require('../../assets/bbb.png')} alt='img' />
                            </div>

                        </div>
                        { /*///////////////////////////////////////////////////// */}
                        <div id='partFourContiner'>
                            <div>
                                from our place as a type of application of the sense of responsibility and the
                                commitments that we have toward our nation so later on after a long study process
                                <div>
                                <img height={130} width={130}style={{float:'right'}} src={require('../../assets/process.png')} alt='img' />
                                    <span>researches</span>
                                    <img height={100} width={100} src={require('../../assets/research.png')} alt='img' />
                                    <span> taking advantages </span>
                                    <img height={100} width={100} src={require('../../assets/taking-notes.png')} alt='img' />
                                </div>
                            </div>
                            

                        </div>
                        <div id='partFourContient'>
                            from the developed countries systems & watching their doctors spending the maximum effort to make the
                            complicated medical concepts as much as possible easier to their people which eventually results in
                            great development in teaching techniques and surely better students and doctors.
                        </div>
                        <div id='partfiveContiner'>
                            <img width={300} src={require('../../assets/presentation.png')} alt='img' />
                        </div>
                        <div id='partfiveContient'>
                            <p>
                                so, we decided to risk it, although, we are aware of the tremendous challenges and
                                difficulties that we going to face in order to serve our nation as we believe that everyone
                                is a soldier from his place, thus; probably you have seen through the website how we put huge
                                 effort and you may have recognized how we expanded our team with new committed, hardworking
                                 members as we are looking always to expand until we reach
                                 every medical student and medical field
                             </p>
                            <p>and the first starting spark of our dream is the beautiful website that
                                you enjoy now simply by mastering concepts through it</p>
                        </div>
                        <div id='imgCenterPageContiner'>
                            <img width={400} src={require('../../assets/center.png')} alt='img' />
                        </div>
                        <div id='partSixContiner'>
                            <span id='partSixContinerTitle'>OUR GOALS</span>
                            <img width={160} src={require('../../assets/rocket.png')} alt='img' />
                        </div>
                        <div id='partSixContent'>
                            1.To let our members understand and realized what are the real meanings of the medical concepts.
                        </div>
                        <div id='imagPartSix'>
                            <img width={120} src={require('../../assets/challenge.png')} alt='img' />
                        </div>
                        <div id='partSavnContiner'>
                            <div>
                                2.To make our students able to pass every qualification exam or evaluating
                                medical exams worldwide that's why we follow mainly USMLE SYSTEM (United State
                                Medical Licensing Examination) in which we provide the highest quality, most
                                 comprehensive, evidence-based, highly organized and offer a single-point resource in
                                 our videos which will make you 100./. capable to pass any medical exam around the globe.
                            </div>
                            <div id='partSavnContinerimg'>
                                <img width={350} src={require('../../assets/usmle.png')} alt='img' />
                            </div>
                        </div>
                        <div id='partEightContiner'>
                            <div id='partEightContinerimg'>
                                <img width={200} src={require('../../assets/download.png')} alt='img' />
                            </div>
                            <div>
                                3.To give courses according to specialty provided for the medical residents
                                and of course these courses required highly specialized professors and specialists
                                that we are going to fight for getting the most expert of them to be recruited in this process.
                            </div>
                        </div>
                        <div id='partNineContiner'>
                            <div>
                                4.To create general awakening courses to spread medical awareness to all the citizens of our countries and anywhere possible.
                            </div>
                            <div id='partNineContinerimg'>
                                <img width={120} src={require('../../assets/mok.png')} alt='img' />
                            </div>
                        </div>
                        <div id='partNineContiner'>
                            <div>
                            5.To keep the Arabic medical community updated as we believe that the medical field is
                             the most developing, growing, among all other fields and it's a duty to spread every useful 
                             information to the people who are responsible of this field and we do that by creating scheduled
                              conferences, lectures presented by the most qualified doctors and of course there is a big 
                            role to be taken for undergraduate students as they represent the future of this field.
                            </div>
                            <div id='partNineContinerimg'>
                                <img width={300} src={require('../../assets/doctor1.png')} alt='img' />
                            </div>
                        </div>
                        <div id='FooterAboutUs'>
                            Thank you for visiting our website
                            </div>
                            <FooterAllPage/>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default AboutUs;
