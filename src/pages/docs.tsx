import React, { Suspense } from "react";
import { Group, Paper, Stack, Text, Title, Box } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { SEO } from "src/constants/seo";
import Layout from "src/layout/Layout";

// 错误边界组件
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

// 动态导入 CodePen 组件
const CodePenEmbed = dynamic(() => import("../components/CodePenEmbed"), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const StyledContentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Docs = () => {
  return (
    <Layout>
      <NextSeo
        {...SEO}
        title="Documentation - JsonFormat"
        description="Integrate JsonFormat widgets into your website."
        canonical="https://jsoncrack.com/docs"
      />
      <Stack spacing="md">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Paper bg="white" c="black" p="md" radius="md" withBorder>
              <Title mb="sm" order={3} c="dark">
                # Fetching from URL
              </Title>
              <StyledContentBody>
                <Box component="div">
                  <Text component="div">
                    By adding <code>?json=https://catfact.ninja/fact</code> query at
                    the end of iframe src you will be able to fetch from URL at widgets without additional
                    scripts. This applies to editor page as well, the following link will fetch the url at
                    the editor:{" "}
                    <a href="https://jsoncrack.com/editor?json=https://catfact.ninja/fact">
                      https://jsoncrack.com/editor?json=https://catfact.ninja/fact
                    </a>
                  </Text>
                </Box>
                <CodePenEmbed
                  id="KKBpWVR"
                  title="Untitled"
                  user="AykutSarac"
                />
              </StyledContentBody>
            </Paper>

            <Paper bg="white" c="black" p="md" radius="md" withBorder>
              <Title mb="sm" order={3} c="dark">
                # Communicating with API
              </Title>
              <Title order={4}>◼︎ Post Message to Embed</Title>
              <StyledContentBody>
                <Box component="div">
                  <Text component="div">
                    Communicating with the embed is possible with{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage">
                      MessagePort
                    </a>
                    , you should pass an object consist of "json" and "options" key
                    where json is a string and options is an object that may contain the following:
                  </Text>
                  <CodeHighlight
                    w={500}
                    language="json"
                    code={
                      '{\n  theme: "light" | "dark",\n  direction: "TOP" | "RIGHT" | "DOWN" | "LEFT"\n}'
                    }
                    withCopyButton={false}
                  />
                </Box>
                <CodePenEmbed
                  id="rNrVyWP"
                  title="Untitled"
                  user="AykutSarac"
                />
              </StyledContentBody>
            </Paper>

            <Paper bg="white" c="black" p="md" radius="md" withBorder>
              <Title order={4}>◼︎ On Page Load</Title>
              <StyledContentBody>
                <Box component="div">
                  <Text component="div">
                    ⚠️ <b>Important!</b> - iframe should be defined before the script tag
                  </Text>
                  <Text component="div">
                    ⚠️ <b>Note</b> - Widget is not loaded immediately with the parent page. The widget
                    sends its <b>id</b> attribute so you can listen for it as in the example below to
                    ensure its loaded and ready to listen for messages.
                  </Text>
                </Box>
                <CodePenEmbed
                  id="QWBbpqx"
                  title="Untitled"
                  user="AykutSarac"
                />
              </StyledContentBody>
            </Paper>
          </Suspense>
        </ErrorBoundary>
      </Stack>
    </Layout>
  );
};

export default Docs;
