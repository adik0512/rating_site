import styled from "styled-components";

export const Body = styled.body`
  max-width: 750px;
  background-color: #f6fafd;
  font-family: "Hind Vadodara", sans-serif;
  float: none;
  margin: 40px auto;
  padding: 20px;
  color: #7387a9;
`;

export const Header = styled.header`
  padding: 5px 0px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  text-align: left;
  color: #7387a9;
`;
export const Round = styled.div`
  box-sizing: border-box;
  margin: 0px;
  border: 1px solid silver;
  background-color: white;
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 0px 2px 0 rgba(0, 0, 0, 0.19);
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  padding: 10px;
  grid-column-gap: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 770px) {
    display: table;
  }
`;

export const GridItem = styled.div`
  padding: 20px;
  float: left;
  text-align: left;
`;

export const Form = styled.form`
  padding: 2px;
  margin: 2px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Button1 = styled.button`
  font-family: "Hind Vadodara", sans-serif;
  border-radius: 4px;
  background-color: #9782c5;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 175px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 20px 5px 0px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Button2 = styled.button`
  font-family: "Hind Vadodara", sans-serif;
  float: right;
  border-radius: 4px;
  background-color: #48c4e0;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 0px 5px 0px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
