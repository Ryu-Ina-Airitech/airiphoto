import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Profile } from "./Profile";

export function ProfileEditor() {
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
                <h3 className="text-right">Profile Editor</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    defaultValue
                    id="userName"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email address"
                    defaultValue
                    id="emailAddress"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Birth Date</label>
                  <input
                    type="datetime"
                    className="form-control"
                    placeholder="yyyy/mm/dd"
                    defaultValue
                    id="birthDate"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Biography</label>
                  <textarea
                    className="form-control"
                    placeholder="biography"
                    value
                    id="biography"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  href="/Profile"
                >
                  SaveProfile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
