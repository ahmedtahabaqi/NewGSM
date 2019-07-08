import React from 'react'
import {  Button,Pane ,Dialog} from 'evergreen-ui';
import StarRatings from 'react-star-ratings';
import Component from "@reactions/component";
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage'
const cookies = new Cookies();



    
    
class HeaderCourses extends React.Component {
    constructor() {
        super()
        this.state = {
             courseDetels:[]
             }
    }
    componentDidMount() {      

        axios.get(host + `api/course/CourseDetails/`+ this.props.match.params.id, { headers: { token: cookies.get('token') } })
            .then(response => { this.setState({ courseDetels: response.data[0]  }) 
            
            
           
        })
            .catch((error) => { console.log('error ' + error); })
    }

    // changeRating(newRating) {
    //     this.setState({
    //         rating: newRating
    //     });
    // }
    render() {
        return (
            <div>
                <NavbarAllPage/>
                <div id='titleCourseContiner'>
                    <div id='titleCourseContiner1'>
                        <h2 id='titleCourse'>
                            {this.state.courseDetels.title}
                   </h2>
                        <p id='descripCourse'>{this.state.courseDetels.body} </p>
                        <div className='rating'>
                            <StarRatings rating={this.state.courseDetels.ratting} starRatedColor="gold"
                                // changeRating={this.changeRating} 
                                starDimension='20px'
                                starSpacing='4px'
                            />
                           <span style={{marginLeft:30}}>{'Auther: '+this.state.courseDetels.userName}</span>
                        </div>
                        <div id='byNowContiner'>
                        <Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="No footer"
        onCloseComplete={() => setState({ isShown: false })}
        hasFooter={false}
      >
        No footer
      </Dialog>
      <Button size={400} appearance="primary" intent="danger"
       onClick={() => setState({ isShown: true })} > By Now</Button>
      
    </Pane>
  )}
</Component>
                            
                            {/* <div id='orginalPrice'>{this.state.courseDetels.__v + ' $'}</div> */}
                            <div id='priceNow'>{this.state.courseDetels.price + ' $'}</div>
                        </div>

                    </div>
                    <div id='imgCardCourseContiner' > <img id='imgCardCourse' src={host+this.state.courseDetels.img} alt="img" /></div>

                </div>





            </div>
        )
    }
}

export default HeaderCourses;
