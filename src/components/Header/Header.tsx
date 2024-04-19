import { HeaderContainer, HeaderLink, HeaderLinks, Logo } from "./Header.styles";

import logo from '../../assets/horizontal_logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt='UnB Bitcoin Club Logo' height={60} />
      <HeaderLinks>
        <HeaderLink href="#about">
          About
        </HeaderLink>
        <HeaderLink href="#events">
          Events
        </HeaderLink>
        <HeaderLink href="#team">
          Team
        </HeaderLink>
      </HeaderLinks>
    </HeaderContainer>
  );
}