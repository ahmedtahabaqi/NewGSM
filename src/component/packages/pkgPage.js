import React from 'react';
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ReactTooltip from 'react-tooltip';

class PkgPage extends React.Component {

    render() {
        return (
            <div>
                <div id='contentUpFooter'>
                    <NavbarAllPage />

                    <Row style={{marginTop:130}} >
                        <Col sm={12} md={6} lg={3} style={{marginTop:40,marginBottom:20}}>
                            <div style={{ height:200, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                            <Link to='/diamond'>
                                <img className='PKGImg' src={require('../../assets/daimond.png')} alt='img' />
                            </Link>
                            <div>
                                <div className='details' data-tip='Postgraduate & Undergraduate'>Details</div>
                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />
                            </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{marginTop:40,marginBottom:20}}>
                        <div style={{ height:200, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                            <Link to='/platinum'>
                                <img className='PKGImg' src={require('../../assets/platinum.png')} alt='img' />
                            </Link>
                            <div>
                                <div className='details' data-tip='Step1 & Step2'>Details</div>
                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                            </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{marginTop:40,marginBottom:20}}>
                        <div style={{ height:200, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                            <Link to='/gold'>
                                <img className='PKGImg' src={require('../../assets/gold.png')} alt='img' />
                            </Link>
                            <div>
                                <div className='details' data-tip='Step 2'>Details</div>
                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                            </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{marginTop:40,marginBottom:20}}>
                        <div style={{ height:200, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                            <Link to='/silver'>
                                <img className='PKGImg' src={require('../../assets/selver.png')} alt='img' />
                            </Link>
                            <div>
                                <div className='details' data-tip='Step1'>Details</div>
                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy2' />

                            </div>
                            </div>
                        </Col>
                    </Row>
                   


                </div>
                <FooterAllPage />

            </div>
        )
    }
}
export default PkgPage;