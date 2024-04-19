import logo from '../../assets/vertical_logo.svg';

import { IntroductionContainer, IntroductionText } from "./Introduction.styles";

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <img src={logo} alt="UnB Bitcoin Club Logo" height={300} />
      <IntroductionText>University of Brasilia's official student group for everything related to Bitcoin.</IntroductionText>
    </IntroductionContainer>
  );
}
