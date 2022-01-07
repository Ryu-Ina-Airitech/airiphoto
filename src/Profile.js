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
            <h1 className="text-right">My Profile</h1>
            <Button
              backgroundColor="#3A6BA5"
              color="white"
              onClick={ClicktoProfileEditor}
            >
              編 集
            </Button>
          </Flex>
          <div className="row mt-2">
            <div className="col-md-6">
              <label className="labels">UserName</label>
              <h2 className="font-weight-bold m-3" value id="userName">
                AiueOk
              </h2>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <label className="labels">Email Address</label>
              <h2 className="font-weight-bold m-3" value id="emailAddress">
                aiueok@mail.com.my
              </h2>
            </div>
            <div className="col-md-12">
              <label className="labels">Birth Date</label>
              <h2 className="font-weight-bold m-3" value id="birthDate">
                2000/01/01
              </h2>
            </div>
          </div>
          <div className="row mt-3">
            <label className="labels">Biography</label>
            <h2 className="font-weight-bold m-3" value id="biography" rows={5}>
              ・朝は起きてすぐ顔を洗います
              <br />
              ・昼はラーメンと餃子を食べます
              <br />
              ・夜は眠いので寝ます
              <br />
            </h2>
          </div>
          <div className="mt-5 text-center"></div>
        </Grid>
      </View>
    </Grid>
  );
}
