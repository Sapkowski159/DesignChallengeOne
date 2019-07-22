import React from "react";
import styled from "styled-components";

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Hero = styled.div`
      display: grid;
      grid-template-columns: repeat(15, 1fr);

      grid-auto-rows: 100%;
      background-color: #4801ff;
    `;

    const UList = styled.ul`
      list-style: none;
      grid-column: 6/15;
      width: 100%;
      direction: rtl;
      transform-style: preserve-3d;
      perspective: 1500px;
      &:first-child {
        margin-top: 10%;
      }
    `;

    const Item = styled.li`
      transform-style: preserve-3d;
    `;
    const ItemDiv = styled.div`
      text-align: right;
      font-size: 12vw;

      transform: rotateY(-15deg) translateZ(0) scale(1);
      transform-origin: right center;
      transform-style: preserve-3d;
      text-transform: uppercase;
      line-height: 0.8;

      &:hover {
        color: black;
        -webkit-text-fill-color: #4801ff; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;

        transform: translate3d(0px, 0.25px, 0px);
        transform-style: preserve-3d;
        transition: transform 0.5s ease;
        perspective-origin: -100% 50%;
      }
    `;

    const Info = styled.div`
      position: fixed;
      top: 70%;
      left: 5%;
      height: 10vh;
    `;
    const InfoHeader = styled.h1`
      text-stroke: 1px #fff;
      text-transform: uppercase;
      color: white;
      line-height: 0.8;
      direction: ltr;
      text-align: left;
      font-size: 3vw;
      font-weight: normal;
      position: fixed !important;
      top: 65%;
      left: 5%;
    `;

    const Footer = styled.footer`
      position: fixed;
      top: 90%;
      left: 5%;
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 0.75em;
    `;

    const Footer2 = styled.footer`
      position: fixed;
      top: 90%;
      left: 20%;
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 0.75em;
    `;

    const Left = styled.div``;
    const Right = styled.div`
      left: 15%;
    `;
    const LeftUL = styled.ul`
      list-style: none;
      direction: ltr;
      text-align: left;
      margin: 0;
      padding: 0;
    `;
    const LeftItem = styled.li``;

    const Nav = styled.nav`
      position: fixed;
      top: 90%;
      left: 35%;
      color: white;
    `;
    const NavUl = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
    `;

    const NavWrapper = styled.div`
      font-family: "Roboto", sans-serif;
      font-size: 0.75em;
      & nav:nth-child(2) {
        left: 90%;
      }
    `;
    const NavUlItem = styled.li``;
    return (
      <Hero>
        <UList>
          <Item>
            <ItemDiv>Project One</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Two</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Three</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Four</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Five</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Six</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Seven</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Eight</ItemDiv>
          </Item>
          <Item>
            <ItemDiv>Project Nine</ItemDiv>
          </Item>
        </UList>

        <Info>
          <InfoHeader>
            Andre
            <br />
            Madar
            <br />
            Co.
          </InfoHeader>
        </Info>

        <Footer>
          <Left>
            <LeftUL>
              <LeftItem>Andre Madar Studio</LeftItem>
              <LeftItem>Web Developer</LeftItem>
            </LeftUL>
          </Left>
        </Footer>
        <Footer2>
          <Left>
            <LeftUL>
              <LeftItem>West Kelowna, BC</LeftItem>
              <LeftItem>Andre@contact.com</LeftItem>
            </LeftUL>
          </Left>
        </Footer2>

        <NavWrapper>
          <Nav>
            <NavUl>
              <NavUlItem>
                <a href="https://vanholtz.co/">
                  01.Inspired and based on: vanholtz.co
                </a>
              </NavUlItem>
              <NavUlItem>
                <a href="#">02.Journal</a>
              </NavUlItem>
            </NavUl>
          </Nav>

          <Nav>
            <NavUl>
              <NavUlItem>
                <a href="#">03.Instagram</a>
              </NavUlItem>
              <NavUlItem>
                <a href="#">04.Git</a>
              </NavUlItem>
              <NavUlItem>
                <a href="#">05.Facebook</a>
              </NavUlItem>
            </NavUl>
          </Nav>
        </NavWrapper>
      </Hero>
    );
  }
}

export default Hero;
