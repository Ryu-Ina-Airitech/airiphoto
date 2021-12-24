// import { useTheme } from "@aws-amplify/ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { UploadView } from "./uploadView";

export function Header() {
  // const { tokens } = useTheme();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            <img
              src="https://c.pxhere.com/images/7e/83/9874c16b50d549e89d9fc4bbb60f-1448913.jpg!d"
              alt="Logo"
              width={100}
              height={80}
            />
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="." /* 何かあれば適宜追加 */
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://freesvg.org/img/abstract-user-flat-4.png"
                  alt="ProfileIcon"
                  width={80}
                  height={80}
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/Profile">
                    プロフィール
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Favorite">
                    お気に入り画像
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/UploadView">
                    アップロード
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/MyPhoto">
                    自分の画像
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Help">
                    ヘルプ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Login">
                    ログアウト
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/UploadView">
          <UploadView />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
