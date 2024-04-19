import { TeamMember } from "../TeamMember";

import { TeamContainer, TeamMembersContainer, TeamTitle } from "./Team.styles"
import { teamMembers } from "./utils";

export const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamTitle>MEET OUR TEAM</TeamTitle>
      <TeamMembersContainer>
        {teamMembers.map((member) =>
          <TeamMember
            key={member.id}
            member={member}
          />
        )}
      </TeamMembersContainer>
    </TeamContainer>
  );
};
