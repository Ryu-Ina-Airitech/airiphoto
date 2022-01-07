import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";
import {
  Navigate
} from 'react-router-dom';

// import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import { render } from "@testing-library/react";

const components = {
  // Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  Footer
};

export function Login() {
  const { tokens } = useTheme();

  // handleAuthStateChange = () => {
  //   console.log('aaa');
  // }

  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }} >
      <View height="100vh" >
        <Image
          src="https://c.pxhere.com/images/7e/83/9874c16b50d549e89d9fc4bbb60f-1448913.jpg!d"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </View>
        <Authenticator components={components}>
          {/* {({ signIn, user }) => ( */}
            {/* // <main>
            //   <h1>Hello aaa {user.username}</h1>
            //   <button onClick={signIn}>Sign out</button>
            // </main> */}
            {/* render(){
              return <Navigate to="/" />;
            } */}
            {/* <Navigate to="/" />; */}
            
          {/* )} */}
        </Authenticator>
    </Grid>
  );
}