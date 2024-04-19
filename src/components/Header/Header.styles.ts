import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100dvw;
  height: 3.75rem;

  background-color: #47141E;
  color: #fbfbfb;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  font-weight: bold;
`;

export const HeaderLink = styled.a`
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  text-decoration: none;
  color: #fafafa;
`;

export const Logo = styled.img`
  margin-top: -0.5rem;
`;
