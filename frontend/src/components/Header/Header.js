import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import AuthStore, { isUserLoggedIn } from "../../stores/authStore";
import "./Header.css";

const { Header: AntHeader } = Layout;

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    function handleLoggedInStatusChange(status) {
      setIsLoggedIn(status);
    }
    const unsubscribe = AuthStore.subscribe(() => {
      handleLoggedInStatusChange(isUserLoggedIn(AuthStore.getState()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logoutFromApp = () => {
    AuthStore.dispatch({ type: "AUTH/LOG_OUT" });
  };
  return (
    <AntHeader>
      <a href="/">
        <div className="logo" title="Home">
          <img
            style={{ height: "30%", width: "30%" }}
            src="https://metaschool.so/assets/logo-black.png"
          />
        </div>
      </a>
      <div className="logout-button">
        {isLoggedIn ? <Button onClick={logoutFromApp}>Logout</Button> : null}
      </div>
    </AntHeader>
  );
};

export default Header;
