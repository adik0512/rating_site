import styled from "styled-components";

export const Body = styled.body`
  max-width: 370px;
  background-color: #f6fafd;
  font-family: "Hind Vadodara", sans-serif;
  float: none;
  margin: 40px auto;
  padding: 20px;
  color: #7387a9;
  border: 1px solid silver;
  background-color: white;
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 0px 2px 0 rgba(0, 0, 0, 0.19);
`;

export const Logo = styled.img`
  background-image: url('${require("./logo.png")}');
  width: 33px;
  height: 32px;
  display: inline-block;
  float: left;
  margin 0px 20px;
`;
export const H4Logo = styled.h4`
  margin: 5px 5px 5px 0px;
  padding: 5px;
`;

export const H4 = styled.h4`
  margin: 5px 5px 5px 0px;
  padding: 5px;
  color: #9782c5;
  font-weight: normal;
  font-size: 23px;
`;

export const DivContainer = styled.div`
  padding: 20px 5px 5px 5px;
`;

export const Form = styled.form`
  padding: 12px 5px 0px 5px;
  margin: 8px 0px 0px 0px;
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
export const LabelCheckbox = styled.label`
  text-align: justify;
  font-size: 15px;
  padding: 0px 0px 0px 10px;
`;

export const Button = styled.button`
  display: inline-block;
  font-family: "Hind Vadodara", sans-serif;
  border-radius: 4px;
  background-color: #9782c5;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 20px 5px 0px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const A = styled.a`
  text-align: center;
  padding: 10px;
  text-decoration: none;
  color: #48c4e0;
  font-size: 14px;
  &:hover {
    color: #9585c4;
  }
`;
