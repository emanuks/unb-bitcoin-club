import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  TeamMemberContainer,
  TeamMemberLink,
  TeamMemberLinks,
  TeamMemberName,
  TeamMemberPosition
} from "./TeamMember.styles";
import { TeamMemberProps } from "./TeamMember.types";


export const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <TeamMemberContainer>
      <FontAwesomeIcon icon={faUser} size='2xl' />
      <TeamMemberName>
        {member.firstName} {member.lastName}
      </TeamMemberName>

      <TeamMemberPosition>
        {member.position}
      </TeamMemberPosition>

      <TeamMemberLinks>
        <TeamMemberLink>
          <FontAwesomeIcon icon={faLinkedin} />
        </TeamMemberLink>
        <TeamMemberLink>
          <FontAwesomeIcon icon={faTwitter} />
        </TeamMemberLink>
        <TeamMemberLink>
          <FontAwesomeIcon icon={faEnvelope} />
        </TeamMemberLink>
      </TeamMemberLinks>
    </TeamMemberContainer>
  );
}