import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "@mui/material";

import { FooterContainer, FooterCopyright, FooterLink } from "./Footer.styles";

export const Footer = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <FooterContainer>
      <FooterCopyright>
        <FontAwesomeIcon
          icon={faCopyright}
          {...(matches ? { size: 'lg' } : {})}
        />
        2024 UnB Bitcoin Club. All rights reserved.
      </FooterCopyright>
      <FooterLink href='https://twitter.com/ClubeBitcoinUnB' target="_blank">
        <FontAwesomeIcon
          icon={faTwitter}
          {...(matches ? { size: 'xl' } : {})}
        />
      </FooterLink>
    </FooterContainer>
  );
}
