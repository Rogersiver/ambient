import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

const ThanksText = styled(motion.p)`
  padding-inline: 2vh;
  color: ${(props) => props.theme.palette.common.black};
  text-align: center;

`;
const ThanksContainer = styled(motion.div)`
  border-radius: 5px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(6px);
`;

const Component = (props: any) => {
  const { prompt } = props;
  const paragraphs = prompt.split('\n');
  const list= paragraphs.map((e: any, i: number) => {
    return <ThanksText key={i}>{e}</ThanksText>
  })
  return (
    <ThanksContainer
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
    >
      {list}
    </ThanksContainer>
  );
};

const Thanks = (props: any) => {
  const { prompt } = props;
  return <Component prompt={prompt} />;
};

export default Thanks;
