import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
//import { useAuthenticator } from "@aws-amplify/ui-react";
//import { withAuthenticator } from 'aws-amplify-react';
// import { Login } from "./Login";

//  function Logout() {
//     const {signOut} = useAuthenticator();
//     // return {signOut};
//     return (
//           <main>
//             <button onClick={signOut}>Sign out</button>
//           </main>
//         );
  
//     return (
//       <main>
//       </main>
// );
//}

// const useValue  = () => {
//   const {signOut} = useAuthenticator();
//   return signOut;
// }

// const { signOut}  = useAuthenticator();
// import { withOktaAuth } from '@okta/okta-react'; 


//  function SignOut() {
//   //const logout = useValue();
//    return useValue();
//   }
    
//   return (
//     <button onClick={signOut}>Sign out</button>
//   );
// }
const styles = theme => ({
  root: {
    width: '80%',
  },
  MuiAppBar: {
    alignItems: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  toolbar: {
    alignItems: 'center'
  }
});

class SearchBar extends React.Component {
  // constructor(props) {
  //   // super(props);
  // //   //this.logout = this.logout.bind(this);
  // }

  // async logout() {
    
  // const {signOut} = useAuthenticator();

  // return (
  //   <main>
  //     <button onClick={signOut}>Sign out</button>
  //   </main>
  // );

  // }

  render() {
     //const {signOut} = Logout;
    const { classes } = this.props;
   // const logout = useValue();
   // const {signOut} = SignOut();

    // const {signOut} = this.signOut;
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{alignItems: 'center',marginLeft:50,marginTop:50, }}>
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                onKeyPress={this.props.onSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            {/* <div className={classes.grow} /> */}
            {/* <Button onClick={this.logout} color="inherit">signOut</Button> */}
             {/* <a href="/Login" class="btn" onClick={ Logout }>signOut</a>  */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);