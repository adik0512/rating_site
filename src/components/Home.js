import React from "react";
import {
  Body,
  Header,
  H1,
  P,
  Button,
  Input,
  Negative,
  Neutral,
  Positive,
  Round,
  Div2
} from "./Home.styled";

const Home = () => {
  return (
    <Body>
      <Header>
        <H1>Test your website</H1>
      </Header>
      <Round>
        <form>
          <Div2>
            <label>
              Try the URL:
              <Input type="url" name="URL" placeholder="www.example.pl" />
            </label>
            <Button>Analise</Button>
          </Div2>
        </form>
      </Round>
      <Round>
        <P>
          SCORE RANGE:<Negative />Negative (-1 – -0,75)<Neutral />Neutral (-0,75
          – 0,25)<Positive />Positive (0,25 – 1,0)
        </P>
      </Round>
    </Body>
  );
};

export default Home;
