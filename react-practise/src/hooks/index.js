import { useEffect } from "react";
import styled from "styled-components";
import PractiseState from "./state/practiseState";

const Container = styled.div`
  padding: 1rem 5rem;
`;

export const SampleHooks = () => {
  useEffect(() => {
    console.log("use effect called");
  });
  return (
    <Container>
      <h4>Hooks Topics</h4>
      {/* <PractiseState /> */}
    </Container>
  );
};
