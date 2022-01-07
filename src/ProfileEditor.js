import {
  Grid,
  View,
  Flex,
  Image,
  Button,
  TextField,
} from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export function ProfileEditor() {
  const navigate = useNavigate();

  const ClicktoProfile = () => {
    navigate("/Profile");
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
      <View width="25rem">
        <Grid templateColumns={"auto"} gap="0.5rem">
          <h1>Profile Editor</h1>
          <div>
            <TextField label="UserName" placeholder="Please enter your name" />
          </div>
          <div>
            <TextField
              label="Email Address"
              placeholder="Please enter your email"
              type="email"
              isRequired={true}
            />
          </div>
          <div>
            <TextField label="Birth Date" placeholder="yyyy/mm/dd" />
          </div>
          <div>
            <TextField
              label="Biography"
              placeholder="enter your Biography"
              isMultiline={true}
              resize="vertical"
              row={5}
            />
          </div>
          <div>
            <Button
              backgroundColor="#3A6BA5"
              color="white"
              onClick={ClicktoProfile}
            >
              保 存
            </Button>
          </div>
        </Grid>
      </View>
    </Grid>
  );
}

// <div className="container rounded bg-light mt-5 mb-5">
//   <div className="row">
//     <div className="col-md-5 border-right">
//       <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//         <img
//           className="rounded-circle mt-5"
//           width="300px"
//           src="https://freesvg.org/img/abstract-user-flat-4.png"
//           alt="ProfileImage"
//         />
//       </div>
//     </div>
//     <div className="col-md-5 border-right">
//       <div className="p-3 py-5">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="text-right">Profile Editor</h3>
//         </div>
//         <div className="row mt-2">
//           <div className="col-md-12">
//             <label className="labels">UserName</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="first name"
//               defaultValue
//               id="userName"
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <label className="labels">Email Address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="enter email address"
//               defaultValue
//               id="emailAddress"
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Birth Date</label>
//             <input
//               type="datetime"
//               className="form-control"
//               placeholder="yyyy/mm/dd"
//               defaultValue
//               id="birthDate"
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <label className="labels">Biography</label>
//             <textarea
//               className="form-control"
//               placeholder="biography"
//               value
//               id="biography"
//               rows={5}
//               defaultValue={""}
//             />
//           </div>
//         </div>
//         <div className="mt-5 text-center">
//           <button
//             className="btn btn-primary profile-button"
//             type="button"
//             href="/Profile"
//           >
//             SaveProfile
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <Routes>
//   <Route path="/Profile">
//     <Profile />
//   </Route>
// </Routes>
