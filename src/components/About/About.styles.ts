import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 37.5rem;
  background: rgb(237,66,100);
  background: linear-gradient(90deg, rgba(237,66,100,1) 0%, rgba(250,188,163,1) 100%);
  color: #fbfbfb;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 70rem;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const AboutSections = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutSectionItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
`;

export const AboutSectionItemContent = styled.p`
  max-width: 25rem;
  text-align: center;
`;