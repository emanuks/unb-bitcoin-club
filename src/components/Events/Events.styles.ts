import styled from "styled-components";

export const EventsContainer = styled.div`
  margin: 10rem 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

export const EventsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
  flex: 1;
`;

export const EventsThread = styled.div`
  border-left: 2px solid #47141e;
  padding-left: 1rem;
  flex: 2;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
