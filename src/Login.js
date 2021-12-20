import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";
  
  // import { Header } from "./Header";
  import { Footer } from "./Footer";
  import { SignInHeader } from "./SignInHeader";
  import { SignInFooter } from "./SignInFooter";
  import { uploadPhoto } from "./App";
  
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
        <Flex
          backgroundColor={tokens.colors.background.secondary}
          justifyContent="center"
        >
          <Authenticator components={components}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
            <input type="file" onChange={uploadPhoto} />;
          </Authenticator>
        </Flex>
      </Grid>
    );
  }
  