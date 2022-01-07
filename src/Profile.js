import { Grid, View, Flex, Image, Button } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();

  const ClicktoProfileEditor = () => {
    navigate("/ProfileEditor");
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", large: "1fr 1fr" }}
      gap="var(--amplify-space-small)"
    >
      <View columnSpan={[1, 1, 1, 2]}>
        <Header />
      </View>
      <View>
        <Flex padding="10vh" justifyContent="center" alignItems="center">
          <Image
            objectFit="contain"
            height="350px"
            width="350px"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="ProfileImage"
          />
        </Flex>
      </View>
      <View>
        <Grid templateColumns={"auto"}>
          <Flex justifyContent="flex-start" alignItems="center" gap="7rem">
            <h1>My Profile</h1>
            <Button
              backgroundColor="#3A6BA5"
              color="white"
              onClick={ClicktoProfileEditor}
            >
              編 集
            </Button>
          </Flex>
          <div>
            <label>UserName</label>
            <h2>AiueOk</h2>
          </div>
          <div>
            <div>
              <label>Email Address</label>
              <h2>aiueok@mail.com.my</h2>
            </div>
            <div>
              <label>Birth Date</label>
              <h2>2000/01/01</h2>
            </div>
          </div>
          <div>
            <label>Biography</label>
            <h2 rows={5}>
              ・朝は起きてすぐ顔を洗います
              <br />
              ・昼はラーメンと餃子を食べます
              <br />
              ・夜は眠いので寝ます
              <br />
            </h2>
          </div>
        </Grid>
      </View>
    </Grid>
  );
}
