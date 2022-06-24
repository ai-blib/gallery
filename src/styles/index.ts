import styled from "styled-components";
import {Box as CBox} from '@mui/material';

export const Column = styled.div<{ alignItems?; justifyContent? }>`
  display: flex;
  align-items: ${({alignItems}) => alignItems || "center"};
  justify-content: ${({justifyContent}) => justifyContent || "center"};
  flex-direction: column;
`;
export const CommonWrap = styled.div<{ width?: number }>`
  width: ${({width}) => width || 480}px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 58px;
`;
export const GrayTextWrap = styled.div`
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  /* identical to box height, or 26px */
  display: flex;
  align-items: center;

  /* Text/disabled */

  color: rgba(0, 0, 0, 0.4);
`;
export const Box = styled(CBox)<{ width?: number | string, height?: number | string, d?: string, ai?: string, jc?: string }>`
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  display: flex;
  flex-direction: ${({d}) => d || 'row'};
  align-items: ${({ai}) => ai || 'initial'};
  justify-content: ${({jc}) => jc || 'initial'};
`
export const GradientFont = styled('span')`
  padding: 0 5px;
  background: ${({theme}) => theme.lightGradientColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`