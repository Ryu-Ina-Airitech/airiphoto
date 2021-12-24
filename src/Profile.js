import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProfileEditor } from "./ProfileEditor";

export function Profile() {
  return (
    <BrowserRouter>
      <div className="container rounded bg-light mt-5 mb-5">
        <div className="row">
          <div className="col-md-5 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="300px"
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="ProfileImage"
              />
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">My Profile</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">UserName</label>
                  <h4 className="font-weight-bold m-3" value id="userName">
                    AiueOk
                  </h4>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Email Address</label>
                  <h4 className="font-weight-bold m-3" value id="emailAddress">
                    aiueok@mail.com.my
                  </h4>
                </div>
                <div className="col-md-12">
                  <label className="labels">Birth Date</label>
                  <h4 className="font-weight-bold m-3" value id="birthDate">
                    2000/01/01
                  </h4>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Biography</label>
                  <h4
                    className="font-weight-bold m-3"
                    value
                    id="biography"
                    rows={5}
                  >
                    ・朝は起きてすぐ顔を洗います
                    <br />
                    ・昼はラーメンと餃子を食べます
                    <br />
                    ・夜は眠いので寝ます
                    <br />
                  </h4>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    href="/ProfileEditor"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/ProfileEditor">
          <ProfileEditor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
