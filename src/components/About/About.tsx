import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faGraduationCap, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

import {
  AboutContainer,
  AboutSectionItem,
  AboutSectionItemContent,
  AboutSectionItemTitle,
  AboutSections,
  AboutTitle
} from "./About.styles";

export const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        WHAT WE DO?
      </AboutTitle>
      <AboutSections>
        <AboutSectionItem>
          <AboutSectionItemTitle>
            <FontAwesomeIcon icon={faGraduationCap} size='2xl' />
            Education
          </AboutSectionItemTitle>

          <AboutSectionItemContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc tincidunt dolor a sem auctor, a vulputate nisl lobortis.
            Nulla convallis luctus tincidunt. Vestibulum et eros leo.
          </AboutSectionItemContent>
        </AboutSectionItem>

        <AboutSectionItem>
          <AboutSectionItemTitle>
            <FontAwesomeIcon icon={faCalendar} size='2xl' />
            Events
          </AboutSectionItemTitle>

          <AboutSectionItemContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc tincidunt dolor a sem auctor, a vulputate nisl lobortis.
            Nulla convallis luctus tincidunt. Vestibulum et eros leo.
          </AboutSectionItemContent>
        </AboutSectionItem>

        <AboutSectionItem>
          <AboutSectionItemTitle>
            <FontAwesomeIcon icon={faHandshakeAngle} size='2xl' />
            Networking
          </AboutSectionItemTitle>

          <AboutSectionItemContent id="events">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc tincidunt dolor a sem auctor, a vulputate nisl lobortis.
            Nulla convallis luctus tincidunt. Vestibulum et eros leo.
          </AboutSectionItemContent>
        </AboutSectionItem>
      </AboutSections>
    </AboutContainer>
  );
};
