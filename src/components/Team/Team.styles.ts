import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

export const TeamMembersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;
