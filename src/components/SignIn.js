import React from "react";
import {
  Body,
  Logo,
  H4,
  DivContainer,
  Form,
  Input,
  LabelCheckbox,
  Button,
  A,
  H4Logo
} from "./SignIn.syled";

const SignIn = () => {
  return (
    <Body>
      <div className="Logo">
        <Logo />
        <H4Logo>AJP Sentiment Analysis</H4Logo>
      </div>
      <DivContainer>
        <H4>Sing in your account</H4>
        <Form>
          <label>
            Adress e-mail:<br />
            <Input type="email" name="email" />
          </label>
          <label>
            Password:<br />
            <Input type="password" name="password" />
          </label>
          <label>
            <input type="checkbox" />
            <LabelCheckbox>
              I agree to the Terms of Service and Privacy Policy
            </LabelCheckbox>
          </label>
          <div>
            <Button type="submit">
              <b>Sign in</b>
            </Button>
            <A href="#">
              <b>Forgot password?</b>
            </A>
            <A href="#">
              <b>Sign up</b>
            </A>
          </div>
        </Form>
      </DivContainer>
    </Body>
  );
};

export default SignIn;
