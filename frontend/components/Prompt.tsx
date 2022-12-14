import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

const PromptText = styled(motion.p)`
  padding-inline: 2vh;
  /* margin: 2vh; */
  font-family: monospace;
  font-size: 1rem;
  color: ${(props) => props.theme.palette.common.black};
  text-indent: 3em;
`;
const PromptContainer = styled(motion.div)`
  border-radius: 5px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(6px);
`;

const Component = (props: any) => {
  const { prompt } = props;
  const paragraphs = prompt.split('\n');
  const list= paragraphs.map((e: any, i: number) => {
    return <PromptText key={i}>{e}</PromptText>
  })
  return (
    <PromptContainer
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
    >
      {list}
    </PromptContainer>
  );
};

const Prompt = (props: any) => {
  const { prompt } = props;
  return <Component prompt={prompt} />;
};

export default Prompt;
