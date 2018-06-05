import React from "react";
import { NavigationContainer, NavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLink to="/signin" />
      <NavLink to="/">PAGE TEST</NavLink>
      <NavLink to="/settings">SETTINGS</NavLink>
      <NavLink to="/">edycja@pqstudio.pl</NavLink>
    </NavigationContainer>
  );
};

export default Navigation;
