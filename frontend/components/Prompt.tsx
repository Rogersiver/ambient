import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

const PromptText = styled(motion.p)`
  padding: 2vh;
  color: ${(props) => props.theme.palette.colors.purple['100']};
  text-indent: 3em;
`;
const PromptContainer = styled(motion.div)`
  border-radius: 5px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(6px);
`;

const Component = (props: any) => {
  const { prompt } = props;
  return (
    <PromptContainer
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <PromptText>{prompt}</PromptText>
    </PromptContainer>
  );
};

const Prompt = (props: any) => {
  const { prompt } = props;
  return <Component prompt={prompt} />;
};

export default Prompt;
