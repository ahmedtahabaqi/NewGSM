
import React from 'react';
import PropTypes from 'prop-types';
import {Spinner, Pane } from 'evergreen-ui';
import Table1 from './table1';
import Table2 from './table2';
import Table3 from './table3';
import Table4 from './table4';
import Table5 from './table5';
import Table6 from './table6';
import Table7 from './table7';
import Table8 from './table8';
import Table9 from './table9';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import Home from '@material-ui/icons/Home';
import Context from '../Context';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    [theme.breakpoints.down(600)]: {
      flexDirection: 'column',

    }

  },
  
  drawer: {
    [theme.breakpoints.up(600)]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up(600)]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up(600)]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
      <Context.Consumer>
        {ctx => {
          if (ctx.value.session.role === 1) {
            return (

              <div className={classes.root} >

                <CssBaseline />                  
                  <IconButton
                  style={{backgroundColor:'#30f9d7',padding:0,height:40,width:40}}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>

                <nav className={classes.drawer}>
                  {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
                  <Hidden smUp implementation="css">
                    <Drawer
                      container={this.props.container}
                      variant="temporary"
                      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                      open={this.state.mobileOpen}
                      onClose={this.handleDrawerToggle}
                      classes={{
                        paper: classes.drawerPaper,
                      }}

                    >
                      <div id='sideBarBGC'>
                        <div id='sideBarBGC1'></div>
                        <div className={classes.toolbar} />
                        <div id='sideDashNew'>
                        <Link to='table1'>
                          <div>Aprovel</div>
                        </Link>
                        <Link to='table6'>
                          <div>COURSES</div>
                        </Link>
                        <Link to='table8'>
                          <div>Students</div>
                        </Link>
                        <Link to='table2'>
                          <div>PACKAGES</div>
                        </Link>
                        <Link to='table3'>
                          <div style={{ fontSize: 20 }}>Applied Instructor</div>
                        </Link>
                        <Link to='table4'>
                          <div>INSTRUCTOR</div>
                        </Link>
                        <Link to='table5'>
                          <div>CATEGORY</div>
                        </Link>
                        <Link to='table9'>
                          <div>Our Contacts</div>
                        </Link>
                        <Link to='/'>
                          <div>Home</div>
                        </Link>
                        </div>
                      </div>
                    </Drawer>
                  </Hidden>
                  <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                    >
                      <div id='sideBarBGC'>
                        <div id='sideBarBGC1'></div>
                        <div className={classes.toolbar} />
                        <div id='sideDashNew'>
                        <Link to='table1'>
                          <div>APROVEL</div>
                        </Link>
                        <Link to='table6'>
                          <div>COURSES</div>
                        </Link>
                        <Link to='table8'>
                          <div>Students</div>
                        </Link>
                        <Link to='table2'>
                          <div>PACKAGES</div>
                        </Link>
                        <Link to='table3'>
                          <div style={{ fontSize: 20 }}>Applied Instructor</div>
                        </Link>
                        <Link to='table4'>
                          <div>INSTRUCTOR</div>
                        </Link>
                        <Link to='table5'>
                          <div>CATEGORY</div>
                        </Link>
                        <Link to='table9'>
                          <div>Our Contacts</div>
                        </Link>
                        <Link to='/'>
                          <div>Home</div>
                        </Link>
                        </div>
                      </div>
                    </Drawer>
                  </Hidden>

                </nav>

                <main className={classes.content}>

                
                  {renderPage(this.props)}
                </main>
              </div>

            )
          }
          else if( ctx.value.spinner){
            return(
              <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
              <Spinner />
          </Pane>
            )
          }
          else 
          {
            return (
              window.location.href='/'
            )
          }
        }}
      </Context.Consumer>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {
  if (props.match.path === '/dashboard1/table1') {
    return (<Table1 />)
  }
  else if (props.match.path === '/dashboard1/table6') {
    return (<Table6 />)
  }
  else if (props.match.path === '/dashboard1/table8') {
    return (<Table8 />)
  }
  else if (props.match.path === '/dashboard1/table2') {
    return (<Table2 />)
  }
  else if (props.match.path === '/dashboard1/table3') {
    return (<Table3 />)
  }
else if (props.match.path === '/dashboard1/table4') {
  return (<Table4 />)
}
  else if (props.match.path === '/dashboard1/table5') {
    return (<Table5 />)
  }
  else if (props.match.path === '/dashboard1/table9') {
    return (<Table9 />)
  }

else if (props.match.path === '/dashboard1/table7') {
  return (<Table7 />)
}
}
export default withStyles(styles, { withTheme: true })(Dashboard);