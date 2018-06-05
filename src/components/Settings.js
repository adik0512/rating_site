import React from "react";
import {
  Body,
  Header,
  H1,
  Round,
  GridItem,
  GridContainer,
  Form,
  Input,
  Button1,
  Button2
} from "./Settings.styled";

const Settings = () => {
  return (
    <Body>
      <Header>
        <H1>Profile</H1>
      </Header>
      <Round>
        <Form>
          <GridContainer>
            <GridItem>
              <label>
                Name:<br />
                <Input type="text" name="name" />
              </label>
              <label>
                Last Name:<br />
                <Input type="text" name="lastname" />
              </label>
              <label>
                Adress e-mail:<br />
                <Input type="email" name="email" />
              </label>
            </GridItem>
            <GridItem>
              <label>
                Password:<br />
                <Input type="password" name="password" />
              </label>
              <div>
                <Button1 type="submit">
                  <b>Change password</b>
                </Button1>
              </div>
            </GridItem>
          </GridContainer>
        </Form>
      </Round>
      <div>
        <Button2 type="submit">
          <b>Save</b>
        </Button2>
      </div>
    </Body>
  );
};

export default Settings;
