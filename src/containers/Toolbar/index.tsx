import React from "react";
import { Text, Flex, Group, Select } from "@mantine/core";
import styled from "styled-components";
import toast from "react-hot-toast";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { SearchInput } from "src/containers/Toolbar/SearchInput";
import { type FileFormat, formats } from "src/enums/file.enum";
import { JSONCrackLogo } from "src/layout/JsonCrackLogo";
import useFile from "src/store/useFile";
import useModal from "src/store/useModal";
import { AccountMenu } from "./AccountMenu";
import { FileMenu } from "./FileMenu";
import { Logo } from "./Logo";
import { OptionsMenu } from "./OptionsMenu";
import { ToolsMenu } from "./ToolsMenu";
import { ViewMenu } from "./ViewMenu";
import { ZoomMenu } from "./ZoomMenu";
import { StyledToolElement } from "./styles";

const StyledTools = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  height: 40px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.TOOLBAR_BG};
  color: ${({ theme }) => theme.SILVER};
  z-index: 36;
  border-bottom: 1px solid ${({ theme }) => theme.SILVER_DARK};

  @media only screen and (max-width: 320px) {
    display: none;
  }
`;

function fullscreenBrowser() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {
      toast.error("Unable to enter fullscreen mode.");
    });
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

interface ToolbarProps {
  isWidget?: boolean;
}

export const Toolbar = ({ isWidget = false }: ToolbarProps) => {
  const setVisible = useModal(state => state.setVisible);
  const setFormat = useFile(state => state.setFormat);
  const format = useFile(state => state.format);

  return (
    <StyledTools>
      <Group gap={2}>
        <Logo />
        <FileMenu />
        <ViewMenu />
        <ToolsMenu />
        <OptionsMenu />
        <ZoomMenu />
      </Group>
      <Group gap={8}>
        <SearchInput />
        <AccountMenu />
      </Group>
    </StyledTools>
  );
};
