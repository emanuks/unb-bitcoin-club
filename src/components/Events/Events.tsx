
import { Event } from "../Event";

import { EventsContainer, EventsThread, EventsTitle } from "./Events.styles";
import { mockedEvents } from "./utils";

export const Events = () => {
  return (
    <EventsContainer>
      <EventsTitle>
        NEXT EVENTS
      </EventsTitle>
      <EventsThread>
        {mockedEvents.map((event) =>
          <Event
            key={event.title}
            event={event}
          />
        )}
      </EventsThread>
    </EventsContainer>
  );
}
