import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import PractiseState from "./state/practiseState";
import EffectComponent from "./use-effect-practise";

const Container = styled.div`
  padding: 1rem 5rem;
`;

export const SampleHooks = () => {
  const [data, setData] = useState(true);
  const [isRead, setIsRead] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setData(false);
    }, 2000);
    setTimeout(() => {
      setIsRead(false);
    }, 3000);
  }, []);

  return (
    <Container>
      <h4>Hooks Topics</h4>
      <EffectComponent data={data} read={isRead} />
      {/* <PractiseState /> */}
    </Container>
  );
};
