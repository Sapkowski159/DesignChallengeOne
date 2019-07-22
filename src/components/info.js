import React from "react";
import styled from "styled-components";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    InfoWrapper = styled.div`
      position: fixed;
    `;
    Info = styled.div``;
    InfoH1 = styled.h1`
      text-transformation: uppercase;
    `;

    return (
      <InfoWrapper>
        <Info>
          <InfoH1>
            Andre
            <br />
            Madar
            <br />
            Inc.
          </InfoH1>
        </Info>
      </InfoWrapper>
    );
  }
}

export default Info;
