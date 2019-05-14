import React, { Component } from 'react';
import Context from '../Context';

// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';


class Tearms extends Component {
    constructor() {
        super()
        this.state = {
        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div id='TearmsOFSERContiner'>
                        <div id='contentUpFooter'>
                            <div id='headerAboutUs'>
                                Tearms Of Service
                        </div>
                            <div id='TearmsContent'>
                                <h2 id='FirstTERMS'>Acceptance of the Terms of Use</h2>
                                <p>Welcome to the website of GSMMED, ("Company", "we" or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, these "Terms of Use"), govern your access to and use of www.gsmmed.com, including any content, functionality and services offered on or through www.gsmmed.com (the "Website"), whether as a guest or registered user.<br />
                                    Please read the Terms of Use carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at gsmmed.com, incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.</p>
                                <p>This Website is offered and available to users who are 18 years of age or older. By using this Website, you represent and warrant that you are of legal age to form a binding contract with the Company. If you do not meet this requirement, you must not access or use the Website.</p>
                                <h2 id='SecondTERMS'>Changes to the Terms of Use</h2>
                                <p>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter.<br />
                                    Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
                                <h2 id='SecondTERMS'>Accessing the Website and Account Security</h2>
                                <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users.<br />
                                    You are responsible for:<br />
                                    •	Making all arrangements necessary for you to have access to the Website.<br />
                                    •	Ensuring that all persons who access the Website through your Internet connection are aware of these Terms of Use and comply with them.<br />
                                    To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete. You agree that all information you provide to register with this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.
                                </p>
                                <p>If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your username, password or other security information. You agree to notify us immediately of any unauthorized access to, or use of, your username or password or any other breach of security.<br />
                                    We have the right to disable any username, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use. </p>
                                <h2 id='SecondTERMS'>Our Information</h2>
                                <p>All information available through the Website is intended for adults who are medical students or licensed healthcare professionals. The Website is not meant to serve as a substitute for your own clinical judgment as a medical student or healthcare professional. The Company does not provide medical advice. If you are a consumer who chooses to use the information available through the Website, you should not rely on that information as professional medical advice or use it to replace any relationship with your physician or other qualified healthcare professional. For medical concerns, including decisions about medications and other treatments, consumers should always consult their physician or, in serious cases, seek immediate assistance from emergency personnel. If you are a healthcare professional, you should exercise your professional judgment in evaluating any information, and we encourage you to confirm the information made available or otherwise obtained through the Website with other sources before undertaking any treatment based on it. If you are a consumer, you should evaluate the information together with your physician or another qualified healthcare professional.<br />
                                    At times, information contained on this Website may require updating to reflect new advances or technologies in the marketplace. It should be noted that this Website is intended to be a general guide and cannot be substituted for professional advice.</p>
                                <h2 id='SecondTERMS'>Fees</h2>
                                <p>You agree to pay all Fees and charges specified. All Fees are exclusive of applicable taxes (e.g., sales, use, or value-added tax), unless otherwise stated, and you are solely responsible for the payment of any such taxes that may be imposed on your use of the Website.<br />
                                    The Company will charge the Fees to the credit card you designate. You authorize the credit card you designate to pay any amounts described herein and authorize the Company, or any other company that acts as a billing agent for the Company, to continue to attempt to charge all sums described herein to your credit card until such Fees are paid in full. You agree to provide the Company updated information regarding your credit card account upon the Company’s request, and any time the information earlier provided is no longer valid. If payment is not received by the Company from your credit card issuer, you agree to pay all amounts due upon demand by the Company.<br />
                                    If the Company permits you to use a credit card to pay for any Fees, you will be asked to provide the Company with a credit card number from a card issuer that we accept. The Company may seek pre-<br/><br/>authorization of your credit card account prior to a purchase to verify the credit card is valid and has the necessary funds or credit available to cover your purchase. These pre-
                                    authorizations will reduce your available balance by the authorization amount until it is released or reconciled with the actual charge. Please contact your credit card issuer if you have additional questions regarding when an authorization amount will be removed from your statement.<br />
                                    The Company may at any time, upon notice required by applicable law, change the price of the Website or any features thereof, institute new charges or fees, or charge a fee for the Website or any part thereof where a fee was not previously charged. All Fees relating to the Website, including any Fees charged for access to the Website, are final and nonrefundable.  </p>
                                    <h2 id='SecondTERMS'>Credits</h2>
                                    <p>As a registered user, we may issue you credits redeemable for digital services on the Website or for products, such as books and other documentation ("Credits"). Credits may only be redeemed through the Website, have no cash value, and are non-transferrable and non-refundable. All Credits are valid for a limited time as described by Company at the time the Credits are issued. Credits expire immediately upon the cancellation or termination of your subscription to the Website, so it is up to you to use all Credits prior to any such cancellation or termination.</p>
                                    <h2 id='SecondTERMS'>Intellectual Property Rights</h2>
                                    <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection, and arrangement thereof), are owned by the Company, its licensors or other providers of such material and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.<br/>
                                    These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Website, except as follows:<br/>
                                    •	Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.<br/>
                                    •	You may store files that are automatically cached by your Web browser for display enhancement purposes.<br/>
                                    •	You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication or distribution; provided, however, that subscribers may download a maximum of 30 files from the website if on monthly, otherwise unlimited.<br/>
                                    •	If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.<br/>
                                    •	If we provide social media features with certain content, you make take such actions as are enabled by such features.<br/>
                                    You must not:<br/>
                                    •	Modify copies of any materials from this site.<br/>
                                    •	Use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.<br/><br/>
                                    •	Delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.<br/>
                                    You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website.<br/>
                                    If you print, copy, modify, download or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Use, your right to use the Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark and other laws.
                                    </p>
                                    <h2 id='SecondTERMS'>Trademarks</h2>
                                    <p>The Company name, the terms gsmmed, GSM MEDICAL EDUCATION, the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.</p>
                                    <h2 id='SecondTERMS'>Prohibited Uses</h2>
                                    <p>
                                    You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:<br/>
                                    •	In any way that violates any applicable federal, state, local or international law or regulation.<br/>
                                    •	For the purpose of exploiting, harming or attempting to exploit or<br/>
                                    •	Harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise.<br/>
                                    •	To send, knowingly receive, upload, download, use or reuse any material which does not comply with the Content Standards set out in these Terms of Use.<br/>
                                    •	To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.<br/>
                                    •	To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing).<br/>
                                    •	To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website, or which, as determined by us, may harm the Company or users of the Website or expose them to liability.<br/>
                                    Additionally, you agree not to:<br/>
                                    •	Use the Website in any manner that could disable, overburden, damage, or impair the site, or interfere with any other party’s use of the Website, including their ability to engage in real time activities through the Website.<br/>
                                    •	Use any robot, spider, or other automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.<br/>
                                    •	Use any manual process to monitor or copy any of the material on the Website or for any other unauthorized purpose without our prior written consent.<br/>
                                    •	Use any device, software, or routine that interferes with the proper working of the Website.<br/>
                                    •	Introduce any viruses, Trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.<br/>
                                    •	Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer or database connected to the Website.<br/>
                                    •	Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.<br/>
                                    •	Otherwise attempt to interfere with the proper working of the Website.<br/> </p>
                                    <h2 id='SecondTERMS'>User Contributions</h2>
                                    <p>The Website may contain message boards, chat rooms, personal profiles, forums, bulletin boards, and other interactive features (collectively, "Interactive Services") that allow users to post, submit, publish, display or transmit to other users or other persons (hereinafter, "post") content or materials (collectively, "User Contributions") on or through the Website.<br/>
                                    All User Contributions must comply with the Content Standards set out in these Terms of Use. Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose.<br/>
                                    Patient Data: It is your sole responsibility to comply with law as well as institutional and professional guidelines with respect to patient confidentiality. You are, always, solely responsible for obtaining and maintaining all patient consents, if applicable, and all other legally necessary consents or permissions required or advisable to disclose, process, receive, transmit, and view patient information. THE COMPANY CANNOT AND DOES NOT ASSUME ANY RESPONSIBILITY FOR THE USE OR MISUSE OF PATIENT INFORMATION OR OTHER INFORMATION TRANSMITTED, MONITORED, STORED, OR RECEIVED BY THE PARTICIPANT WHILE USING THE WEBSITE AND THE MATERIALS ON THE WEBSITE. WE RESERVE THE RIGHT TO AMEND OR DELETE ANY MATERIAL (ALONG WITH THE RIGHT TO REVOKE ANY MEMBERSHIP OR RESTRICT ACCESS TO THE SITE) THAT IN OUR SOLE DISCRETION VIOLATES THE ABOVE.<br/>
                                    You represent and warrant that:<br/>
                                    •	You own or control all rights in and to the User Contributions and have the right to grant the license granted above to us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns.<br/>
                                    •	All of your User Contributions do and will comply with these Terms of Use.<br/>
                                    You understand and acknowledge that you are responsible for any User Contributions you submit or contribute, and you, not the Company, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.<br/>
                                    We are not responsible, or liable to any third party, for the content or accuracy of any User Contributions posted by you or any other user of the Website.
                                    </p>
                                    <h2 id='SecondTERMS'>Monitoring and Enforcement</h2>
                                    <p>
                                    We have the right to:<br/>
                                    •	Remove or refuse to post any User Contributions for any or no reason in our sole discretion.<br/>
                                    •	Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion, including if we believe that such User Contribution violates the Terms of Use, including the Content Standards, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the Website or the public or could create liability for the Company.<br/>
                                    •	Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.<br/>
                                    •	Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website.<br/>
                                    •	Terminate or suspend your access to all or part of the Website for any or no reason, including without limitation, any violation of these Terms of Use.<br/>
                                    •	Notify your educational institution of potentially infringing or violative content posted by you, or potential acts of fraud.<br/>
                                    Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES, LICENSEES AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING OR BECAUSE OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.<br/>
                                    However, we do not undertake to review all material before it is posted on the Website, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications or content provided by any user or third party. We have no liability or responsibility to anyone for performance or nonperformance of the activities described in this section.
                                    </p>
                                    <h2 id='SecondTERMS'>Content Standards</h2>
                                    <p>
                                    These content standards apply to any and all User Contributions and use of Interactive Services. User Contributions must in their entirety comply with all applicable international laws and regulations. Without limiting the foregoing, User Contributions must not:<br/>
                                    •	Contain any personally identifiable information, including protected health information (PHI), as defined by the HIPAA Privacy Rule, located at 45 CFR Part 160 and Subparts A and E of Part 164.<br/>
                                    •	Contain any material which is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory or otherwise objectionable.<br/>
                                    •	Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.<br/>
                                    •	Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other rights of any other person.<br/>
                                    •	Violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our Privacy Policy.<br/>
                                    •	Be likely to deceive any person.<br/>
                                    •	Promote any illegal activity, or advocate, promote or assist any unlawful act.<br/>
                                    •	Cause annoyance, inconvenience or needless anxiety or be likely to upset, embarrass, alarm, or annoy any other person.<br/>
                                    •	Impersonate any person, or misrepresent your identity or affiliation with any person or organization.<br/>
                                    •	Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions, barter, or advertising.<br/>
                                    •	Give the impression that they emanate from or are endorsed by us or any other person or entity, if this is not the case.<br/>
                                    </p>
                                    <h2 id='SecondTERMS'>Copyright Policy</h2>
                                    <p>We take claims of copyright infringement seriously. We will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from the Website infringe your copyright, you may request removal of those materials (or access to them) from the Website by submitting written notification to our Copyright Agent </p>
                                    <h2 id='SecondTERMS'>Reliance on Information Posted</h2>
                                    <p>The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.<br/>
                                    This Website may include content provided by third parties, including materials provided by other users, bloggers and third-party licensors, syndicators, aggregators, and reporting services. All statements and opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials <br/>
                                    do not necessarily reflect the opinion of the Company. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.</p>
                                    <h2 id='SecondTERMS'>Changes to the Website</h2>
                                    <p>We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.</p>
                                    <h2 id='SecondTERMS'>Privacy and Consent to Share Certain Information</h2>
                                    <p>All information we collect on this Website is subject to our Privacy Policy. By using the Website, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.<br/>
                                    This Website does not collect any personally identifying information about you except when you expressly provide it. You agree that the Company can use your personal identifying information for editorial, promotional, or marketing purposes, unless you request that your information not be used in such manner.<br/>
                                    When you access content on the Website, we collect information, including, but not limited to, information about the lessons you watch online, the test questions you complete, your performance on practice tests, flashcards you complete, and your progress toward completion in various subject areas. Information concerning your usage of the Website and your progress using our study materials ("Course Performance Information") may be disclosed to third parties such as educational institutions, professors, and product development partners for a variety of purposes, including, but not limited to, analyzing and improving exam passage rates and for the development of new products and services</p>
                                    <h2 id='SecondTERMS'>Linking to the Website and Social Media Features</h2>
                                    <p>
                                    You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without our express written consent.<br/>
                                    This Website may provide certain social media features that enable you to:<br/>
                                    •	Link from your own or certain third-party websites to certain content on this Website.<br/>
                                    •	Send e-mails or other communications with certain content, or links to certain content, on this Website.<br/>
                                    •	Cause limited portions of content on this Website to be displayed or appear to be displayed on your own or certain third-party websites.<br/>
                                    You may use these features solely as they are provided by us and solely with respect to the content they are displayed with and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Subject to the foregoing, you must not:<br/>
                                    •	Establish a link from any website that is not owned by you.<br/>
                                    •	Cause the Website or portions of it to be displayed, or appear to be displayed by, for example, framing, deep linking, or in-line linking, on any other site.<br/>
                                    •	Link to any part of the Website other than the homepage.<br/>
                                    •	Otherwise take any action with respect to the materials on this Website that is inconsistent with any other provision of these Terms of Use.<br/>
                                    The website from which you are linking, or on which you make certain content accessible, must comply in all respects with the Content Standards set out in these Terms of Use.<br/>
                                    You agree to cooperate with us in causing any unauthorized framing or linking immediately to cease. We reserve the right to withdraw linking permission without notice.<br/>
                                    We may disable all or any social media features and any links at any time without notice in our discretion.<br/>

                                    </p>
                                    <h2 id='SecondTERMS'>Links from the Website</h2>
                                    <p>If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.</p>
                                    <h2 id='SecondTERMS'>Disclaimer of Warranties</h2>
                                    <p>You understand that we cannot and do not guarantee or warrant that files available for downloading from the Internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.<br/>
                                    YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE <br/>
                                    WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.<br/>
                                    THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR PARTICULAR PURPOSE.<br/>
                                    THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.<br/>
                                     </p>
                                     <h2 id='SecondTERMS'>Limitation on Liability</h2>
                                    <p>IN NO EVENT WILL THE COMPANY, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.<br/>
                                    THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
                                    <h2 id='SecondTERMS'>Indemnification</h2>
                                    <p>You agree to defend, indemnify and hold harmless the Company, its affiliates, licensors and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, any use of the Website’s content, services and products other than as expressly authorized in these Terms of Use or your use of any information obtained from the Website.</p>
                                    <h2 id='SecondTERMS'>Waiver of Class Action Rights</h2>
                                    <p>BY ENTERING INTO THESE TERMS, YOU HEREBY IRREVOCABLY WAIVE ANY RIGHT YOU MAY HAVE TO JOIN CLAIMS WITH THOSE OF OTHERS IN THE FORM OF A CLASS ACTION OR SIMILAR PROCEDURAL DEVICE. ANY CLAIMS ARISING OUT OF, RELATING TO, OR CONNECTED WITH THESE TERMS MUST BE ASSERTED INDIVIDUALLY.</p>
                                    <h2 id='SecondTERMS'>Governing Law and Jurisdiction</h2>
                                    <p>All matters relating to the Website and these Terms of Use and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State.</p>
                                    <h2 id='SecondTERMS'>Limitation on Time to File Claims</h2>
                                    <p>ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN TWO (2) YEARS AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</p>
                                    <h2 id='SecondTERMS'>Waiver and Severability</h2>
                                    <p>No waiver by the Company of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.<br/>
                                    If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.
                                    </p>
                                    <h2 id='SecondTERMS'>Entire Agreement</h2>
                                    <p>The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and gsmmed with respect to the Website and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the Website.</p>
                            </div>
                        </div>
                        <FooterAllPage />

                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default Tearms;



