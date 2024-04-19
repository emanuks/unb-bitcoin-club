import styled from "styled-components";

export const TeamMemberContainer = styled.div`
  margin: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

export const TeamMemberName = styled.p``;

export const TeamMemberPosition = styled.p`
  font-size: 0.75rem;
`;

export const TeamMemberLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #ED4264;

  gap: 0.5rem;
`;

export const TeamMemberLink = styled.div`
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FABCA3;
  }
`; 
