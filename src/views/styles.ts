import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    // background: ${({theme}) => theme.subBackground};

  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
`;
export const Container = styled.div<{ hidden: boolean, bg: string | boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme, bg}) => bg || theme.subBackground};
  padding-bottom: ${({hidden}) => !hidden && "100px"};
  align-items: center;
  //@media (min-width: 1024px) {
  //padding-left: 0px;
  //padding-right: 0px;
  //width: 1280px;
  //}
`;
