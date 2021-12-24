// import { useTheme } from "@aws-amplify/ui-react";

export function Header() {
  // const { tokens } = useTheme();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./Home.js">
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
                  <a className="dropdown-item" href="./Profile.js">
                    プロフィール
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./Favorite.js">
                    お気に入り画像
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./Upload.js">
                    アップロード
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./">
                    自分の画像
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./Help.js">
                    ヘルプ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./Login.js">
                    ログアウト
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
