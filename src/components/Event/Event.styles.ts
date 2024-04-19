import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.5rem;

  &:first-child {
    margin-top: -2rem;
  }
`;

export const ThreadIndex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ThreadIcon = styled.div`
  margin-left: -1.75rem;
  color: #47141e;
`;

export const EventDate = styled.div`
  width: 9rem;

  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  background-color: #47141e;
  color: #fbfbfb;

  font-weight: bold;
`;

export const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
`;

export const EventDescription = styled.p`
  padding: 0 1rem;
`;