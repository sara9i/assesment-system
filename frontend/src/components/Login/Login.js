import { Button, Form, Input, Row } from "antd";
import Axios from "axios";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import AuthStore, { isUserLoggedIn } from "../../stores/authStore";
import { checkAndReturnAuthObject } from "../../utilities/validator";
import Card from "../Card";
import Image from "../Image";
import { loginBackground, login_logo } from "./constant";
import "./Login.scss";

const className = "c-Login";

const Login = (props) => {
  let [form] = Form.useForm();

  useEffect(() => {
    function handleLoggedInStatusChange(status) {
      props.history.push("/");
    }
    const unsubscribe = AuthStore.subscribe(() => {
      handleLoggedInStatusChange(isUserLoggedIn(checkAndReturnAuthObject()));
    });
    return () => {
      unsubscribe();
    };
  }, [props.history]);

  const loginUser = async (email, password) => {
    let LoginURL = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
    try {
      let response = await Axios.post(LoginURL, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  };

  const onFinish = async (values) => {
    try {
      let response = await loginUser(values.email, values.password);
      AuthStore.dispatch({ type: "AUTH/LOG_IN", payload: response });
      const user = response?.user;
      const tabs = user?.tabsVisible;
      if (tabs) {
        if (tabs?.length > 1) {
          props.history.push("/");
        } else {
          props.history.push(`/${tabs[0]}`);
        }
      } else {
        props.history.push("/");
      }
    } catch (error) {
      alert("Error logging in: " + error?.data?.message);
    }
  };

  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <div className={`${className}__background__wrapper`}>
          <Image {...loginBackground} />
        </div>
        <Card>
          <div className={`${className}__logo__wrapper`}>
            <Image {...login_logo} />
          </div>
          <div className={`${className}__subtext`}>
            Join the web3 rocketship
          </div>
          <div className={`${className}__form__wrapper`}>
            <Form
              form={form}
              name="Login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  className={`${className}__email__input`}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    type: "string",
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "Password should be atleast 8 characters with atleast 1 uppercase, 1 lowercase and 1 numeric character",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  className={`${className}__password__input`}
                />
              </Form.Item>
              <Row justify="center">
                <Form.Item shouldUpdate={true}>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={
                        !form.isFieldsTouched(true) ||
                        form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      Log in
                    </Button>
                  )}
                </Form.Item>
              </Row>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Login);
