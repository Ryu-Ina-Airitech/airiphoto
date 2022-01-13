import React, { Fragment } from "react";
import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import { Link } from "react-router-dom";

const components = {
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter,
  },
  Footer,
};

export function Login() {
  const { tokens } = useTheme();

  return (
    <Grid templateColumns={{ base: "1fr 1fr", medium: "1fr 1fr" }}>
      <View height="100vh">
        <Image
          src="https://c.pxhere.com/images/7e/83/9874c16b50d549e89d9fc4bbb60f-1448913.jpg!d"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </View>
      <Flex
        backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <Authenticator components={components}>
          {({ signOut, user }) => (
            <Fragment>
              <h1>Hello {user.attributes.email}</h1>
              <Link to={`/Home`}>GotoHome</Link>
              {/* <Navigate to="/Home" /> */}
            </Fragment>
          )}
        </Authenticator>
      </Flex>
    </Grid>
  );
}
