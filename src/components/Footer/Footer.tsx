import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContainer, FooterCopyright, FooterLink } from "./Footer.styles";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopyright>
        <FontAwesomeIcon icon={faCopyright} />
        2024 UnB Bitcoin Club. All rights reserved.
      </FooterCopyright>
      <FooterLink href='https://twitter.com/ClubeBitcoinUnB' target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </FooterLink>
    </FooterContainer>
  );
}
