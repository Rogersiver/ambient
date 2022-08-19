import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

const GreetingText = styled(motion.h1)`
  padding-top: 5vh;
  padding-left: 5vh;
  color: ${(props) => props.theme.palette.colors.purple['400']};
`;
const GreetingContainer = styled.div``;

const Component = (props: any) => {
  const { name } = props;

  return (
    <GreetingContainer>
      <GreetingText
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div>Hello, {name} </div>
      </GreetingText>
    </GreetingContainer>
  );
};

const Greeting = (props: any) => {
  const { name } = props;
  return <Component name={name} />;
};

export default Greeting;
