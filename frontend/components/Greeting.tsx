import styled from 'styled-components';
import React, {useContext} from 'react';
import { motion } from 'framer-motion';
const GreetingText = styled(motion.h1)`
  text-align: center;
  font-size: 6vh;
  color: ${(props) => props.theme.palette.common.black};
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
        <div>Hey {name},</div>
      </GreetingText>
    </GreetingContainer>
  );
};

const Greeting = (props: any) => {
  const { name } = props;
  return <Component name={name} />;
};

export default Greeting;
