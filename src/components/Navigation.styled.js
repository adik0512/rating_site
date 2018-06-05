import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  font-family: "Hind Vadodara", sans-serif;
  font-weight: 900;
  font-size: 16px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const NavLink = styled(Link)`
  float: left;
  border-right: 1px solid #bbb;
  display: inline-block;
  text-align: center;
  padding: 20px 30px;
  text-decoration: none;
  color: #7387a9;
  &:hover {
    background-color: #9782c5;
    color: white;
  }
  &:first-child {
    background-color: #9782c5;
    height: 24px;
    width: 24px;
    margin: 0px 200px 0px 0px;
  }
  &:nth-child(2) {
    border-left: 1px solid #bbb;
    border-bottom: 3px solid #4ec2e2;
    margin: -3px;
  }
}
&:last-child {
  float:right;
  letter-spacing: 0.5px;
}

`;
