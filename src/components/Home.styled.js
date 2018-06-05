import styled from "styled-components";

export const Body = styled.body`
  max-width: 800px;
  background-color: #f6fafd;
  font-family: "Hind Vadodara", sans-serif;
  float: none;
  margin: 40px auto;
  padding: 10px 100px;
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

export const P = styled.p`
  font-size: large;
  height: 30px;
  text-align: center;
  padding: 20px 0px;
`;
export const Div2 = styled.div`
  font-size: large;
  height: 80px;
  text-align: center;
  padding: 50px 0px;
`;
export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #9782c5;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px 5px 5px 0px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Input = styled.input`
  width: 65%;
  padding: 16px 11px 11px 11px;
  margin: 10px -1px 10px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Negative = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 1px;
  margin: 5px 10px 0px;
  background-color: red;
  border-radius: 50%;
`;
export const Neutral = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 1px;
  margin: 5px 10px 0px;
  background-color: yellow;
  border-radius: 50%;
`;
export const Positive = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 1px;
  margin: 5px 10px 0px;
  background-color: green;
  border-radius: 50%;
`;

export const Round = styled.div`
  margin: -1px auto;
  border: 1px solid silver;
  background-color: white;
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 0px 2px 0 rgba(0, 0, 0, 0.19);
`;
