import React, { Component } from 'react';
import Context from './component/Context';
import HeaderHome from './component/Home/Header';
import SlidBar from './component/AddCourse/SlideBar';
import AddLecture from './component/AddCourse/AddLecture';
import MyCourses from './component/myCourses/ContentMyCourses';
import ShowCourseChapter from './component/myCourses/showCourseChapter';
import LoginAndRegister from './component/loginAndRegister/loginAndRegister';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './component/common/scrolToTop';
import Profile from './component/common/profile';
import ForgetPassword from './component/forgetPassword/forgetpassword';
import ForgetPassword1 from './component/forgetPassword/forgetpassword1';
import ResetPassword from './component/forgetPassword/resetPassword';
import ResetPassword1 from './component/forgetPassword/resetPassword1';
import MessageCheack from './component/forgetPassword/messageCheack';
import Dashboard from './component/dashboard/Dashboard';
import AllCourseAdmin from './component/dashboard/AllCorseAdmin';
import CourseT from './component/dashboard/courseT';
import ShowPackages from './component/packages/showPackages';
import Gold from './component/packages/gold';
import ShowGold from './component/packages/ShowGold';
import Silver from './component/packages/sliver';
import ShowSilver from './component/packages/ShowSilver';
import Diamond from './component/packages/daimond';
import ShowDiamond from './component/packages/ShowDiamond';
import Platinum from './component/packages/platinum';
import ShowPlatinum from './component/packages/ShowPlatinum';
import CoursesByCategory from './component/coursesByCategory/coursesByCategory';
import Package from './component/packages/package';
import ContentCourses from './component/courses/contentCourses';
import ContentCoursesPkg from './component/packages/contentCoursesPkg';
import HeaderAllCourses from './component/allCorses/HeaderAllCourses';
import Upload from './component/AddCourse/upload';
import GsmTeam from './component/contactAndDesribtion/gsmTeam';
import TrustedBy from './component/contactAndDesribtion/trustedby';
import AboutUs from './component/contactAndDesribtion/aboutUs';
import PkgPage from './component/packages/pkgPage';
import Instructer from './component/contactAndDesribtion/instructer';
import ContactUs from './component/contactAndDesribtion/contactUs';
import Tearms from './component/contactAndDesribtion/tearmOfService';
import axios from 'axios';
import host from './component/Host';
import './assets/indexCss';
import './App.css';
import Cookies from "universal-cookie";
const cookies = new Cookies();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerCource: [],
      packageId: '',
      auth: "logding",
      session: [],
      spinner: true,
    }
  }
  componentDidMount() {
   
    if (cookies.get("token")) {
      var headers = { "Content-Type": "application/json", token: cookies.get("token") };
      axios.get(host + `api/user/checklogin`,
        { headers: headers })
        .then(response => {
          this.setState({
            spinner: false,
            auth: response.data[0].auth,
            session: response.data[1].sesson,

          })

        })
        .catch((error) => {
          this.setState({
            auth: "notLogin",

          })
          console.log(error)
        })
    }
    else if (cookies.get("tokenUser")) {
      var headersUser = {
        "Content-Type": "application/json",
        token: cookies.get("tokenUser")
      };
      axios.get(host + `api/student/checklogin`,
        { headers: headersUser })
        .then(response => {          
          this.setState({
            spinner: false,
            auth: response.data[0].auth,
            session: response.data[1].sesson,



          })

        })
        .catch((error) => {
          this.setState({ spinner: false })
          console.log(error.message)


        })
    }
    else {
      setTimeout(() => {
        this.setState({ spinner: false, })
      }, 2000);
    }



  }

  state = {}
  render() {
    return (<Context.Provider value={{
      value: this.state,
      action: {
        HeaderCource: (corse) => {
          this.setState({ headerCource: corse })
        },
      }
    }}>
      <BrowserRouter>

        <div className="App">

          <ScrollToTop>
            <Route exact path='/' component={HeaderHome} />
            <Route path='/addlecture/:id' component={AddLecture} />
            <Route path='/uploadVideo' component={Upload} />
            <Route path='/Addcourses' component={SlidBar} />
            <Route path='/allcourses' component={HeaderAllCourses} />
            <Route path='/courses/:id' component={ContentCourses} />
            <Route path='/coursesPackeg/:id' component={ContentCoursesPkg} />

            <Route path='/ShowPackages' component={ShowPackages} />

            <Route path='/gold' component={Gold} />
            <Route path='/silver' component={Silver} />
            <Route path='/platinum' component={Platinum} />
            <Route path='/diamond' component={Diamond} />
            
            <Route exact path='/PkgsPage' component={PkgPage} />
            <Route path='/gsmteam' component={GsmTeam} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/trustedby' component={TrustedBy} />
            <Route path='/tearmsOfService' component={Tearms} />
            <Route path='/instructer' component={Instructer} />
          </ScrollToTop>
          <Route path='/forgetpassword' component={ForgetPassword} />
          <Route path='/forgetpassword1' component={ForgetPassword1} />
          <Route path='/resetoken' component={ResetPassword} />
          <Route path='/resetoken1' component={ResetPassword1} />
          <Route path='/message' component={MessageCheack} />
          <Route path='/profile' component={Profile} />
          <Route path='/mycourses' component={MyCourses} />
          <Route path='/mycoursesChapter/:id' component={ShowCourseChapter} />
          <Route path='/AllCourseAdmin/:id' component={AllCourseAdmin} />
          <Route path='/coursepackage/:id' component={Package} />
          <Route path='/Showgold/:id' component={ShowGold} />
          <Route path='/Showsilver/:id' component={ShowSilver} />
          <Route path='/Showdiamond/:id' component={ShowDiamond} />
          <Route path='/Showplatinum/:id' component={ShowPlatinum} />
          <Route path='/CoursesByCategory/:id' component={CoursesByCategory} />
          <Route path='/courseinstructor/:id' component={CourseT} />
          <Switch>
            <Route path='/dashboard1/table1' component={Dashboard} />
            <Route path='/dashboard1/table2' component={Dashboard} />
            <Route path='/dashboard1/table3' component={Dashboard} />
            <Route path='/dashboard1/table4' component={Dashboard} />
            <Route path='/dashboard1/table5' component={Dashboard} />
            <Route path='/dashboard1/table6' component={Dashboard} />
            <Route path='/dashboard1/table7' component={Dashboard} />
            <Route path='/dashboard1/table8' component={Dashboard} />
            <Route path='/dashboard1/table9' component={Dashboard} />
          </Switch>



          <LoginAndRegister />

        </div>
      </BrowserRouter>
    </Context.Provider>
    );
  }
}

export default App;
