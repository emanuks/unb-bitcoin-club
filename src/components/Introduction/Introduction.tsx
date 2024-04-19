import { useMediaQuery } from '@mui/material';

import logo from '../../assets/vertical_logo.svg';

import { IntroductionContainer, IntroductionText } from "./Introduction.styles";

export const Introduction = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <IntroductionContainer>
      <img src={logo} alt="UnB Bitcoin Club Logo" height={matches ? 200 : 300} />
      <IntroductionText id="about">
        University of Brasilia's official student group for everything related to Bitcoin.
      </IntroductionText>
    </IntroductionContainer>
  );
}
