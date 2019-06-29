import React, { Component } from 'react';
import Context from '../Context';
import { Row, Col } from 'react-bootstrap';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
import { Link } from 'react-router-dom';

class Instructer extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='contentUpFooter'>
                        <NavbarAllPage />
                            <Row style={{ padding: 0, margin: 0 }}>
                                <Col id='COOOOOlInstructor1' md={12} lg={6}>
                                <Link to='/contactus'>
                                    <div id='titleHeaderInstructor1'>Instructor Terms & Conditions</div>
                                   </Link>
                                    <div id='logoInstructorContiner'>
                                        <Link to='/'>
                                            <img width={60} src={require('../../assets/loog.png')} alt='logo' />
                                        </Link>
                                        <div>Instructor Terms & Conditions</div>
                                    </div>
                                    <div id='COnTENtInstructor1'>

                                        <p> If you are an Instructor, these Instructor Terms & Conditions (the “Instructor Terms”) contain the terms and conditions of Your participation as an Instructor via Gsmmed Services. This is a binding agreement between you and Gsmmed and is incorporated by reference into Gsmmed’s Terms of Use (“Terms of Use”).
                                            Any version of these Instructor Terms in a language other than English is provided for convenience and you understand and agree that the English language will control if there is any conflict.
                                        </p>
                                        <h5>1.Agreement</h5>
                                        <p>
                                            As an Instructor You are contracting directly with Gsmmed, Additionally, although We may utilize other Gsmmed subsidiaries to facilitate Your payments, Your contract remains between You and Gsmmed.
                                        </p>
                                        <h5>2.Your Relationship with Students</h5>
                                        <p>
                                            Instructors do not have a direct contractual relationship with Students. The only information You will receive about Students is what is provided to You through the Services (“Student Related Data”). You understand and agree that You will indemnify Gsmmed for any issues arising out of Your use of any Student Related Data.
                                        </p>
                                        <h5>3.Obligations</h5>
                                        <p>
                                            As an Instructor, you represent, warrant, and covenant that:
                                        </p>
                                        <p>
                                            1.	You will visit www.gsmmed.com and complete the Instructor enrollment form and if You choose to charge fees for Your Courses, You will also need to agree again to the pricing terms which are presented to you during the paid Course creation process;
    2.	You will be responsible for all of Your Submitted Content. You further agree that You own or have the necessary licenses, rights, consents, and permissions, and the authority to authorize Gsmmed, to reproduce, distribute, publicly perform (including by means of a digital audio transmission), publicly display, communicate to the public, promote, market and otherwise use and exploit any of Your Submitted Content on and through the Services in the manner contemplated by these Instructor Terms;
    3.	No Submitted Content shall infringe or misappropriate any intellectual property right of a third party;
    4.	You have the required qualifications, credentials and expertise, including without limitation, education, training, knowledge, and skill sets, to teach and offer the services You offer on Your Course and through the Services;
    5.	You will not post or provide any inappropriate, offensive, racist, hateful, sexist, pornographic, false, misleading, incorrect, infringing, defamatory or libelous content or information;
    6.	You will not upload, post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes or any other form of solicitation (commercial or otherwise) through the Services or to any User;
    7.	You will not use the Services for any business other than for providing tutoring, teaching and instructional services to Students;
    8.	You will not engage in any activity that will require Gsmmed to obtain any licenses from or pay any royalties to any third party, including, by way of example and not limitation, the payment of royalties for the public performance of any musical works or sound recordings;
    9.	You will not copy, modify, distribute, reverse engineer, deface, tarnish, mutilate, hack, or interfere with Company Content and/or the Services or operations thereof, except as permitted in these Instructor Terms;
    10.You will not frame or embed the Services in a manner to embed a free coupon version of your course or other similar functionality intended to circumvent the Services;
    11.You will not impersonate another person or gain unauthorized access to another person's Account;
    12.Your use of the Services are subject to Gsmmed’s approval, which We may grant or deny in Our sole discretion;
    13.You will not introduce any virus, worm, spyware or any other computer code, file or program that may or is intended to damage or hijack the operation of any hardware, software or telecommunications equipment, or any other aspect of the Services or operation thereof; scrape, spider, use a robot or other automated means of any kind to access the Services;
    14.You will not interfere with or otherwise prevent other Instructors from providing their services or Courses;
    15.You will maintain accurate Account information;
    16.You shall respond promptly to Students and ensure a quality of service commensurate with the standards of Your industry and instruction services in general;
    17.You are over the age of 18 or, if not, you are between the ages of 13 and 17 and a third party parent or legal guardian has agreed to these Instructor Terms, as well as all other of Our terms and policies as shall be posted on Our Services from time to time, and will assume responsibility and liability for Your performance and compliance hereunder.
    18.You will insert the intro video of Gsmmed and insert the post photo.
    19.You will not insert any media (videos and photos or audio) with watermarks or copyrights.
    20.Gsmmed team will review your contents and give you (instructor) a feedback of approval.
    21.You will follow the Gsmmed orders of the courses that you are going to teach in the sequence and quality determined.
                                        </p>
                                        <h5>4.License to G.S.M MEDICAL EDUCATIONS</h5>
                                        <p>
                                            You hereby grant G.S.M MEDICAL EDUCATIONS a worldwide, non-exclusive, royalty-free right and license to reproduce, distribute, publicly perform, offer, market and otherwise use and exploit the Submitted Content through the Services, and sublicense it to Users for these purposes directly or through third parties. For more information on how we may use Submitted Content please visit Our Privacy Policy. Notwithstanding the foregoing, and subject to the Instructor Terms, if you are an Instructor, unless specifically stated otherwise, you have the right to remove all or any portion of Your Submitted Content from the Services at any time. Removal of Your Submitted Content will terminate the foregoing license and rights sixty (60) days after such removal as to new Users, provided, however, that any rights given to Users prior to that time will continue in accordance with the terms granted to such Users.
    You hereby agree that We may record all or any part of any Courses (including voice chat communications) for quality control and delivering, marketing, promoting, demonstrating or operating the Services. You hereby grant G.S.M MEDICAL EDUCATIONS permission to use Your name, likeness, image or voice in connection with offering, delivering, marketing, promoting, demonstrating, and selling the Services, Courses, Company Content and Submitted Content and waive any and all rights of privacy, publicity, or any other rights of a similar nature in connection therewith, to the extent permissible under applicable law.
                                        </p>
                                        <h5>5.Trust & Safety</h5>
                                        <p>
                                            By agreeing to these Instructor Terms, you also agree to abide by the Trust & Safety policies found at our website and more specifically, the list of restricted topics found at our website. Please check both periodically as there will be minor changes made to the policies and restricted list from time to time. G.S.M MEDICAL EDUCATIONS  reserves the right to remove Courses and Instructors at its sole discretion, as described in Our Terms of Use.
                                        </p>
                                        <h5>6.Pricing</h5>
                                        <p>
                                            As an Instructor, you will be responsible for selecting the Base Price You charge Students for Your Course(s) and then our team will suggest you a reasonable price in a way of couple of suggestions that you must choose one of them.
    You agree to charge only for Your own Submitted Content. You may not charge separately for any course add-ons such as downloadable PDFs or other content and services (such as providing a link to a third-party service to sell downloadable PDFs). The Company will handle billing and other fee interaction with Students. When the Sale Currency is different than the Base Currency
    As part of Your participation on G.S.M MEDICAL EDUCATIONS, you give Us permission to share Your Course, and information about You and the Course with Gsmmed employees and selected partners, for which You will not receive compensation.
    Gsmmed offers certain programs that can help you market your Courses (“Marketing Programs”). Marketing Programs may include, but are not limited to, Gsmmed’s Deals Program and Marketing Boost Program. The complete list and terms of the currently available Marketing Programs are available at our website, which may be updated from time to time. If You choose to participate, the fee You receive from Gsmmed will be in accordance with the terms of the particular Marketing Program that applies to the sale of Your Course. You may opt out of any Marketing Programs at any time, provided however, if you do opt-out of a Marketing Program, your Course will remain subject to any sales, campaigns, or promotions under any Marketing Programs that apply to Your Course that are active at the time you opt-out until the completion of such sales, campaigns, or promotions. In addition, you acknowledge and accept that certain sales, campaigns, or promotions under any Marketing Programs that apply to Your Course that are active at the time you opt-out until the completion of such sales, campaigns, or promotions. In addition, you acknowledge and accept that certain sales, campaigns or promotions may be limited in applicability and not all sales, campaigns, or promotions will apply to Your Course. campaigns or promotions may be limited in applicability and not all sales, campaigns, or promotions will apply to Your Course.
    
    You acknowledge that the amounts paid by Students for Courses sold through Marketing Programs are not fixed, and G.S.M MEDICAL EDUCATIONS has the sole discretion to determine those amounts and which Courses to offer as part of such Marketing Programs. Further, G.S.M MEDICAL EDUCATIONS does not guarantee any minimum level of success in connection with the Marketing Programs, and its selection of Courses to include is not an endorsement of those Courses, or of You. If You do not wish to participate in certain Marketing Programs, log into Your Account and opt out of them.
                                        </p>
                                        <h5>7.Payments</h5>
                                        <p>
                                            As an instructor, you will be payed for your course(s) as one third (1/3rd) of the net price.
    So that Company can pay you in a timely manner, you must have a PayPal account or a Payoneer account in good standing and keep Gsmmed apprised as to the correct email address associated with your PayPal or Payoneer account. Payment will be made within forty-five (45) days of the end of the month in which the fee for a Course was received. You are responsible for providing Company with all identifying and tax information necessary for the payment of amounts due.
                                        </p>
                                        <h5>8.Deletion of Your Account</h5>
                                        <p>
                                            If You wish to delete Your Instructor Account, we will use commercially reasonable efforts make any remaining scheduled payments due and owing to You prior to deleting Your Account. You hereby understand and agree that if Student(s) have previously enrolled to Your Course(s), after Your Account has been deleted Your name and such Course(s) will remain accessible to those such Students who enrolled to Your Course(s). Should You require any assistance or encounter any difficulty in deleting Your Instructor Account You may also contact Us via email at :gsm.med.edu@gmail.com
                                        </p>
                                        <h5>9.Modifications to These Instructor Terms</h5>
                                        <p>
                                            From time to time, we may update these Instructor Terms to clarify our practices or to reflect new or different practices, such as when We add new features, and Gsmmed reserves the right to modify and/or make changes to these Instructor Terms at any time. If We make any material change, we will notify You using prominent means such as by email notice sent to the email address specified in Your Account or by posting.
                                        </p>
                                    </div>
                                </Col>
                                <Col id='COOOOOlInstructor2' md={12} lg={6}>
                                    <Link to='/contactus'>
                                    <div id='titleHeaderInstructor2'>Instructor Terms & Privilages</div>
                                    </Link>
                                    <div id='logoInstructorContiner'>
                                        <Link to='/'>
                                            <img width={60} src={require('../../assets/loog.png')} alt='logo' />
                                        </Link>
                                        <div>Instructor Terms & Privilages</div>
                                    </div>
                                    <div id='COnTENtInstructor1'>
                                        <p>
                                            If you are an Instructor, these Instructor Terms & Conditions (the “Instructor Terms”) contain the terms and conditions of Your participation as an Instructor via Gsmmed Services. This is a binding agreement between you and Gsmmed and is incorporated by reference into Gsmmed’s Terms of Use (“Terms of Use”).
                                            Any version of these Instructor Terms in a language other than English is provided for convenience and you understand and agree that the English language will control if there is any conflict.
                                        </p>
                                        <h5>1.Agreement</h5>
                                        <p>
                                            As an Instructor You are contracting directly with Gsmmed, Additionally, although We may utilize other Gsmmed subsidiaries to facilitate Your payments, Your contract remains between You and Gsmmed.
                                        </p>
                                        <h5>2.Your Relationship with Students</h5>
                                        <p>
                                            Instructors do not have a direct contractual relationship with Students. The only information You will receive about Students is what is provided to You through the Services (“Student Related Data”). You understand and agree that You will indemnify Gsmmed for any issues arising out of Your use of any Student Related Data.
                                        </p>
                                        <h5>3.Obligations</h5>
                                        <p>
                                            As an Instructor, you represent, warrant, and covenant that:
                                            1.	You will visit www.gsmmed.com and complete the Instructor enrollment form and if You choose to charge fees for Your Courses, You will also need to agree again to the pricing terms which are presented to you during the paid Course creation process;
                                            2.	You will be responsible for all of Your Submitted Content. You further agree that You own or have the necessary licenses, rights, consents, and permissions, and the authority to authorize Gsmmed, to reproduce, distribute, publicly perform (including by means of a digital audio transmission), publicly display, communicate to the public, promote, market and otherwise use and exploit any of Your Submitted Content on and through the Services in the manner contemplated by these Instructor Terms;
                                            3.	No Submitted Content shall infringe or misappropriate any intellectual property right of a third party;
                                            4.	You have the required qualifications, credentials and expertise, including without limitation, education, training, knowledge, and skill sets, to teach and offer the services You offer on Your Course and through the Services;
                                            5.	You will not post or provide any inappropriate, offensive, racist, hateful, sexist, pornographic, false, misleading, incorrect, infringing, defamatory or libelous content or information;
                                            6.	You will not upload, post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes or any other form of solicitation (commercial or otherwise) through the Services or to any User;
                                            7.	You will not use the Services for any business other than for providing tutoring, teaching and instructional services to Students;
                                            8.	You will not engage in any activity that will require Gsmmed to obtain any licenses from or pay any royalties to any third party, including, by way of example and not limitation, the payment of royalties for the public performance of any musical works or sound recordings;
                                            9.	You will not copy, modify, distribute, reverse engineer, deface, tarnish, mutilate, hack, or interfere with Company Content and/or the Services or operations thereof, except as permitted in these Instructor Terms;
                                            10.You will not frame or embed the Services in a manner to embed a free coupon version of your course or other similar functionality intended to circumvent the Services;
                                            11.You will not impersonate another person or gain unauthorized access to another person's Account;
                                            12.Your use of the Services are subject to Gsmmed’s approval, which We may grant or deny in Our sole discretion;
                                            13.You will not introduce any virus, worm, spyware or any other computer code, file or program that may or is intended to damage or hijack the operation of any hardware, software or telecommunications equipment, or any other aspect of the Services or operation thereof; scrape, spider, use a robot or other automated means of any kind to access the Services;
                                            14.You will not interfere with or otherwise prevent other Instructors from providing their services or Courses;
                                            15.You will maintain accurate Account information;
                                            16.You shall respond promptly to Students and ensure a quality of service commensurate with the standards of Your industry and instruction services in general;
                                            17.You are over the age of 18 or, if not, you are between the ages of 13 and 17 and a third party parent or legal guardian has agreed to these Instructor Terms, as well as all other of Our terms and policies as shall be posted on Our Services from time to time, and will assume responsibility and liability for Your performance and compliance hereunder.
                                            18.You will insert the intro video of Gsmmed and insert the post photo.
                                            19.You will not insert any media (videos and photos or audio) with watermarks or copyrights.
                                            20.Gsmmed team will review your contents and give you (instructor) a feedback of approval.
                                            21.You will follow the Gsmmed requirements of the courses types that you are going to teach in the sequence and quality determined.
    
                                        </p>
                                        <h5>4.License to G.S.M MEDICAL EDUCATIONS</h5>
                                        <p>
                                            You hereby grant G.S.M MEDICAL EDUCATIONS a worldwide, non-exclusive, royalty-free right and license to reproduce, distribute, publicly perform, offer, market and otherwise use and exploit the Submitted Content through the Services, and sublicense it to Users for these purposes directly or through third parties. For more information on how we may use Submitted Content please visit Our Privacy Policy. Notwithstanding the foregoing, and subject to the Instructor Terms, if you are an Instructor, unless specifically stated otherwise, you have the right to remove all or any portion of Your Submitted Content from the Services at any time. Removal of Your Submitted Content will terminate the foregoing license and rights sixty (60) days after such removal as to new Users, provided, however, that any rights given to Users prior to that time will continue in accordance with the terms granted to such Users.
                                            You hereby agree that We may record all or any part of any Courses (including voice chat communications) for quality control and delivering, marketing, promoting, demonstrating or operating the Services. You hereby grant G.S.M MEDICAL EDUCATIONS permission to use Your name, likeness, image or voice in connection with offering, delivering, marketing, promoting, demonstrating, and selling the Services, Courses, Company Content and Submitted Content and waive any and all rights of privacy, publicity, or any other rights of a similar nature in connection therewith, to the extent permissible under applicable law.
                                        </p>
                                        <h5>5.Trust & Safety</h5>
                                        <p>
                                            By agreeing to these Instructor Terms, you also agree to abide by the Trust & Safety policies found at our website and more specifically, the list of restricted topics found at our website. Please check both periodically as there will be minor changes made to the policies and restricted list from time to time. G.S.M MEDICAL EDUCATIONS  reserves the right to remove Courses and Instructors at its sole discretion, as described in Our Terms of Use.
                                        </p>
                                        <h5>6.Pricing</h5>
                                        <p>
                                            As an Instructor, you will be responsible for selecting the Base Price You charge Students for Your Course(s) and then our team will suggest you a reasonable price in a way of couple of suggestions that you must choose one of them.
                                            You agree to charge only for Your own Submitted Content. You may not charge separately for any course add-ons such as downloadable PDFs or other content and services (such as providing a link to a third-party service to sell downloadable PDFs). The Company will handle billing and other fee interaction with Students. When the Sale Currency is different than the Base Currency
                                            As part of Your participation on G.S.M MEDICAL EDUCATIONS, you give Us permission to share Your Course, and information about You and the Course with Gsmmed employees and selected partners, for which You will not receive compensation.
                                            Gsmmed offers certain programs that can help you market your Courses (“Marketing Programs”). Marketing Programs may include, but are not limited to, Gsmmed’s Deals Program and Marketing Boost Program. The complete list and terms of the currently available Marketing Programs are available at our website, which may be updated from time to time. If You choose to participate, the fee You receive from Gsmmed will be in accordance with the terms of the particular Marketing Program that applies to the sale of Your Course. You may opt out of any Marketing Programs at any time, provided however, if you do opt-out of a Marketing Program, your Course will remain subject to any sales, campaigns, or promotions under any Marketing Programs that apply to Your Course that are active at the time you opt-out until the completion of such sales, campaigns, or promotions. In addition, you acknowledge and accept that certain sales, campaigns, or promotions under any Marketing Programs that apply to Your Course that are active at the time you opt-out until the completion of such sales, campaigns, or promotions. In addition, you acknowledge and accept that certain sales, campaigns or promotions may be limited in applicability and not all sales, campaigns, or promotions will apply to Your Course. campaigns or promotions may be limited in applicability and not all sales, campaigns, or promotions will apply to Your Course.
                                            
                                            You acknowledge that the amounts paid by Students for Courses sold through Marketing Programs are not fixed, and G.S.M MEDICAL EDUCATIONS has the sole discretion to determine those amounts and which Courses to offer as part of such Marketing Programs. Further, G.S.M MEDICAL EDUCATIONS does not guarantee any minimum level of success in connection with the Marketing Programs, and its selection of Courses to include is not an endorsement of those Courses, or of You. If You do not wish to participate in certain Marketing Programs, log into Your Account and opt out of them.
    
                                        </p>
                                        <h5>7.Payments</h5>
                                        <p>
                                            As an instructor, you will be payed for your course(s) as one third (1/3rd) of the net price.
                                           So that Company can pay you in a timely manner, you must have a PayPal account or a Payoneer account in good standing and keep Gsmmed apprised as to the correct email address associated with your PayPal or Payoneer account. Payment will be made within forty-five (45) days of the end of the month in which the fee for a Course was received. You are responsible for providing Company with all identifying and tax information necessary for the payment of amounts due.
                                        </p>
                                        <h5>8.Deletion of Your Account</h5>
                                        <p>
                                            You wish to delete Your Instructor Account, we will use commercially reasonable efforts make any remaining scheduled payments due and owing to You prior to deleting Your Account. You hereby understand and agree that if Student(s) have previously enrolled to Your Course(s), after Your Account has been deleted Your name and such Course(s) will remain accessible to those such Students who enrolled to Your Course(s). Should You require any assistance or encounter any difficulty in deleting Your Instructor Account You may also contact Us via email at :gsm.med.edu@gmail.com
                                        </p>
                                        <h5>9.Modifications to These Instructor Terms</h5>
                                        <p>
                                            From time to time, we may update these Instructor Terms to clarify our practices or to reflect new or different practices, such as when We add new features, and Gsmmed reserves the right to modify and/or make changes to these Instructor Terms at any time. If We make any material change, we will notify You using prominent means such as by email notice sent to the email address specified in Your Account or by posting. notice on Our Services. Other modifications will become effective on the day they are posted unless stated otherwise. If You continue to use the Services, after the effective date of any change, then such access and/or use will be deemed an acceptance of and an agreement to follow and be bound by the Instructor Terms as changed. The revised Instructor Terms supersedes all previous Instructor Terms
                                        </p>
                                        <h5>10.privilages</h5>
                                        <p>
                                            As a team member of Gsmmed you have many privileges including;
                                            a-You will have a discounted courses at www.gsmmed.com
                                            b-Attending the annual meetings of Gsmmed that will be held in a different country each year, Gsmmed will provide with accommodation & Meals etc.
                                            c-workshops, conferences will be held about different topics from time to time.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <FooterAllPage />
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}
export default Instructer;

