import { Grid, Flex, View, Menu, MenuItem } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut } = useAuthenticator();
  const navigate = useNavigate();

  const ClicktoHome = () => {
    navigate.push("./Home");
  };
  const ClicktoProfile = () => {
    navigate.push("./Profile");
  };
  // const ClicktoProfile = useCallback(() => navigate.push("./Profile"), []);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#F5F5F5"
    >
      <View padding="1rem">
        <img
          src="https://c.pxhere.com/images/7e/83/9874c16b50d549e89d9fc4bbb60f-1448913.jpg!d"
          alt="Logo"
          width={100}
          height={60}
          onClick={ClicktoHome}
        />
      </View>
      <View padding="1rem">
        <Grid templateColumns="1fr 1fr">
          <img
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="ProfileIcon"
            onClick={ClicktoProfile}
            width={60}
            height={60}
          />
          <Menu>
            <MenuItem onClick={ClicktoProfile}>プロフィール</MenuItem>
            <MenuItem>お気に入り画像</MenuItem>
            <MenuItem>アップロード</MenuItem>
            <MenuItem>自分の画像</MenuItem>
            <MenuItem>ヘルプ</MenuItem>
            <MenuItem onClick={signOut}>ログアウト</MenuItem>
          </Menu>
        </Grid>
      </View>
    </Flex>
  );
}
