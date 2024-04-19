import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

import {
  EventContainer,
  EventDate,
  EventDescription,
  EventTitle,
  ThreadIcon,
  ThreadIndex
} from "./Event.styles";
import { EventProps } from "./Event.types";

export const Event = ({ event }: EventProps) => {
  return (
    <EventContainer>
      <ThreadIndex>
        <ThreadIcon>
          <FontAwesomeIcon icon={faCube} size='xl' />
        </ThreadIcon>
        <EventDate>
          {event.date}
        </EventDate>
      </ThreadIndex>
      <EventTitle>
        {event.title}
      </EventTitle>
      <EventDescription>
        {event.description}
      </EventDescription>
    </EventContainer>
  );
}