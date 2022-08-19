import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  max-width: 80vh;
  margin: auto;
`;

const CallPageContainer = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default CallPageContainer;
