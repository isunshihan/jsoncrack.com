import React from 'react';
import styled from 'styled-components';
import { Box } from '@mantine/core';

interface CodePenEmbedProps {
  id: string;
  title: string;
  user: string;
}

const StyledFrame = styled.iframe`
  border: none;
  width: 80%;
  height: 500px;
  border-radius: 8px;
  margin: 16px 0;
`;

const CodePenEmbed: React.FC<CodePenEmbedProps> = ({ id, title, user }) => {
  return (
    <Box component="div">
      <StyledFrame
        title={title}
        src={`https://codepen.io/${user}/embed/${id}?default-tab=html%2Cresult`}
        loading="lazy"
      >
        <Box component="div" className="codepen-fallback">
          See the Pen{" "}
          <a href={`https://codepen.io/${user}/pen/${id}`}>{title}</a> by{" "}
          {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </Box>
      </StyledFrame>
    </Box>
  );
};

export default CodePenEmbed;
