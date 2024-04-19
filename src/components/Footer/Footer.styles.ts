import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100dvw;
  height: 8rem;

  background-color: #47141E;
  color: #fbfbfb;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fbfbfb;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
