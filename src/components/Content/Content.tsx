import { About } from "../About";
import { Events } from "../Events";
import { Introduction } from "../Introduction";
import { Team } from "../Team";

import { Divider } from "./Content.styles";

export const Content = () => {
  return (
    <>
      <Introduction />
      <About />
      <Events />
      <Divider />
      <Team />
    </>
  );
};